import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/database/prisma.service';
import { CommentsRepository } from '../coments.repository';
import { CreateCommentsDto } from '../../Dto/create-coments.dto';
import { Comments } from '../../entities/coments.entity';
import { UpdateCommentsDto } from '../../Dto/update-coments.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CommentsPrismaRepository implements CommentsRepository {
  constructor(private prisma: PrismaService) {}
  async create(
    data: CreateCommentsDto,
    userId: string,
    anouncementId: string,
  ): Promise<Comments> {
    const comment = new Comments();

    Object.assign(comment, data);

    const newComment = await this.prisma.coments.create({
      data: {
        id: comment.id,
        comment: comment.comment,
        user: {
          connect: {
            id: userId,
          },
        },
        anouncement: {
          connect: {
            id: anouncementId,
          },
        },
      },
    });

    return plainToInstance(Comments, newComment);
  }

  async update(data: UpdateCommentsDto, id: string): Promise<Comments> {
    const comment = await this.prisma.coments.update({
      where: { id },
      data: {
        comment: data.comment,
      },
    });
    return plainToInstance(Comments, comment);
  }

  async findAllbyAnouncement(id: string): Promise<Comments[]> {
    const comments = await this.prisma.coments.findMany({
      where: { anouncementId: id },
    });

    return comments;
  }

  async findOne(id: string): Promise<Comments> {
    const comment = await this.prisma.coments.findFirst({
      where: { id },
    });

    return comment;
  }

  async remove(id: string): Promise<void> {
    await this.prisma.coments.delete({
      where: { id },
    });
  }
}
