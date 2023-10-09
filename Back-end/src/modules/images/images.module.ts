import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { ImagesService } from './images.service';
import { ImagesRepository } from './repositories/images.repository';
import { ImagesPrismaRepository } from './repositories/prisma/images-prisma.repository';

@Module({
  providers: [
    ImagesService,
    PrismaService,
    {
      provide: ImagesRepository,
      useClass: ImagesPrismaRepository,
    },
  ],
  exports: [ImagesService, ImagesRepository],
})
export class ImagesModule {}
