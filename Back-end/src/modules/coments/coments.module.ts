import { Module } from '@nestjs/common';
import { CommentsController } from './coments.controller';
import { CommentsService } from './coments.service';
import { PrismaService } from '../database/prisma.service';
import { CommentsRepository } from './repositories/coments.repository';
import { CommentsPrismaRepository } from './repositories/prisma/coments-prisma.repository';
import { UserModule } from '../users/users.module';
import { AnouncementModule } from '../anouncements/anouncements.module';

@Module({
  imports: [UserModule, AnouncementModule],
  controllers: [CommentsController],
  providers: [
    CommentsService,
    PrismaService,
    {
      provide: CommentsRepository,
      useClass: CommentsPrismaRepository,
    },
  ],
  exports: [CommentsService],
})
export class CommentsModule {}
