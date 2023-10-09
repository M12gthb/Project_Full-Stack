import { Injectable, NotFoundException } from '@nestjs/common';
import { ImagesRepository } from './repositories/images.repository';
import { CreateImagenDto } from './Dto/create-images.dto';
import { UpdateImageDto } from './Dto/update-images.dto';

@Injectable()
export class ImagesService {
  constructor(private imagesRepository: ImagesRepository) {}
  async create(createImageDto: CreateImagenDto, anouncemnetId: string) {
    const image = await this.imagesRepository.create(
      createImageDto,
      anouncemnetId,
    );
    return image;
  }

  async update(data: UpdateImageDto, anouncementId: string) {
    const anouncement = this.imagesRepository.update(data, anouncementId);
    if (!anouncement) {
      throw new NotFoundException('Anouncement not found');
    }
    return anouncement;
  }
}
