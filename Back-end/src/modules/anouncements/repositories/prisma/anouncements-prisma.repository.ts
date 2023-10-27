import { Injectable } from '@nestjs/common';
import { CreateAnouncementsDto } from '../../Dto/create-anouncements.dto';
import { Anouncements } from '../../entities/anouncements.entity';
import { UpdateAnounceamentsDto } from '../../Dto/update-anouncements.dto';
import { AnouncementsRepository } from '../anouncements.repository';
import { PrismaService } from 'src/modules/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { ImagesService } from 'src/modules/images/images.service';

@Injectable()
export class AnouncementsPrismaRepository implements AnouncementsRepository {
  constructor(
    private prisma: PrismaService,
    private imagesServices: ImagesService,
  ) {}
  async create(
    data: CreateAnouncementsDto,
    userId: string,
  ): Promise<Anouncements> {
    const { images, ...rest } = data;
    const anouncement = new Anouncements();
    Object.assign(anouncement, { ...rest });

    const newAnouncement = await this.prisma.anouncements.create({
      data: {
        id: anouncement.id,
        brand: anouncement.brand,
        model: anouncement.model,
        year: anouncement.year,
        fuel: anouncement.fuel,
        mileage: anouncement.mileage,
        color: anouncement.color,
        priceTabel: anouncement.priceTabel,
        description: anouncement.description,
        publish: anouncement.publish,
        cover_img: anouncement.cover_img,
        price: anouncement.price,
        userId,
      },
    });

    return plainToInstance(Anouncements, newAnouncement);
  }

  async update(
    data: UpdateAnounceamentsDto,
    id: string,
  ): Promise<Anouncements> {
    const { images, ...rest } = data;
    const updateAnouncement = await this.prisma.anouncements.update({
      where: { id },
      include: { images: true },
      data: { ...rest },
    });

    for await (const image of images) {
      await this.imagesServices.update(image, id);
    }
    return plainToInstance(Anouncements, updateAnouncement);
  }

  async findAll(): Promise<Anouncements[]> {
    const anouncements = await this.prisma.anouncements.findMany({
      include: { images: true },
    });
    return anouncements;
  }

  async findOne(id: string): Promise<Anouncements> {
    console.log(id);
    const anouncement = await this.prisma.anouncements.findFirst({
      where: { id },
      include: { images: true },
    });

    return anouncement;
  }

  async findByUser(id: string) {
    const anouncements = await this.prisma.anouncements.findMany({
      where: { userId: id },
      include: { images: true },
    });
    return anouncements;
  }

  async remove(id: string): Promise<void> {
    await this.prisma.anouncements.delete({
      where: { id },
      include: { images: true },
    });
  }
}
