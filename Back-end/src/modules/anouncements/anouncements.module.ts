import { Module } from '@nestjs/common';
import { ImagesModule } from '../images/images.module';
import { AnouncementsController } from './anouncemnets.controller';
import { PrismaService } from '../database/prisma.service';
import { AnouncementService } from './anouncements.service';
import { AnouncementsRepository } from './repositories/anouncements.repository';
import { AnouncementsPrismaRepository } from './repositories/prisma/anouncements-prisma.repository';
import { UserModule } from '../users/users.module';

@Module({
  imports: [ImagesModule, UserModule],
  controllers: [AnouncementsController],
  providers: [
    AnouncementService,
    PrismaService,
    {
      provide: AnouncementsRepository,
      useClass: AnouncementsPrismaRepository,
    },
  ],
  exports: [AnouncementService, AnouncementsRepository],
})
export class AnouncementModule {}
