import { Injectable } from '@nestjs/common';
import { ImagesRepository } from '../images.repository';
import { PrismaService } from 'src/modules/database/prisma.service';
import { CreateImagenDto } from '../../Dto/create-images.dto';
import { Images } from '../../entities/images.entity';
import { UpdateImageDto } from '../../Dto/update-images.dto';

@Injectable()
export class ImagesPrismaRepository implements ImagesRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateImagenDto, anouncementId: string): Promise<Images> {
    const image = new Images();
    Object.assign(image, {
      ...data,
    });

    const newImage = await this.prisma.images.create({
      data: {
        id: image.id,
        image_url: image.image_url,
        anouncementId,
      },
    });

    return newImage;
  }
  async update(data: UpdateImageDto, anouncementId: string): Promise<Images> {
    const image = await this.prisma.images.update({
      where: {
        id: anouncementId,
      },
      data: { ...data },
    });
    return image;
  }

  async findImages(anouncementId: string): Promise<Images[]> {
    const images = await this.prisma.images.findMany({
      where: { anouncementId: anouncementId },
    });
    return images;
  }
}
