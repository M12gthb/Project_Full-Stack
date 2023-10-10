import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ImagesService } from '../images/images.service';
import { CreateAnouncementsDto } from './Dto/create-anouncements.dto';
import { UpdateAnounceamentsDto } from './Dto/update-anouncements.dto';
import { AnouncementsRepository } from './repositories/anouncements.repository';
import { UsersService } from '../users/users.service';
import { ImagesRepository } from '../images/repositories/images.repository';

@Injectable()
export class AnouncementService {
  constructor(
    private anouncementsRepository: AnouncementsRepository,
    private userService: UsersService,
    private imageService: ImagesService,
    private imagesRepository: ImagesRepository,
  ) {}
  async create(createAnouncemnetsrDto: CreateAnouncementsDto, userId: string) {
    const { images } = createAnouncemnetsrDto;
    const findUser = await this.userService.findOne(userId);
    if (findUser.type != 'anunciante') {
      throw new ForbiddenException('Only advertisers are allowed');
    }
    const anouncement = await this.anouncementsRepository.create(
      createAnouncemnetsrDto,
      userId,
    );

    for await (const image of images) {
      await this.imageService.create(image, anouncement.id);
    }
    const newAnouncement = await this.anouncementsRepository.findOne(
      anouncement.id,
    );

    return newAnouncement;
  }

  async update(
    data: UpdateAnounceamentsDto,
    anouncementsId: string,
    userId: string,
  ) {
    const anouncement =
      await this.anouncementsRepository.findOne(anouncementsId);

    if (!anouncement) {
      throw new NotFoundException('Anouncement not found!');
    }
    if (anouncement.userId !== userId) {
      throw new ForbiddenException('You dont have permitions');
    }

    const { images } = data;
    const updateImages = [...data.images, ...images];

    for await (const image of anouncement.imagens) {
      await this.imageService.delete(image.id);
    }

    for await (const image of updateImages) {
      await this.imageService.update(image, anouncementsId);
    }

    const newAnouncement = await this.anouncementsRepository.update(
      data,
      anouncementsId,
    );

    return newAnouncement;
  }

  async findAll() {
    const anouncements = this.anouncementsRepository.findAll();
    return anouncements;
  }

  async findOne(id: string) {
    const anouncement = await this.anouncementsRepository.findOne(id);
    if (!anouncement) {
      throw new NotFoundException('Anouncement not found!');
    }
    return anouncement;
  }

  async findByUser(userId: string) {
    const anouncements = await this.anouncementsRepository.findByUser(userId);

    return anouncements;
  }

  async remove(id: string, userId: string) {
    const anouncement = await this.anouncementsRepository.findOne(id);
    if (!anouncement) {
      throw new NotFoundException('Anouncement not found!');
    }

    if (anouncement.userId !== userId) {
      throw new ForbiddenException('You dont have permitions');
    }

    await this.anouncementsRepository.remove(id, userId);
  }
}
