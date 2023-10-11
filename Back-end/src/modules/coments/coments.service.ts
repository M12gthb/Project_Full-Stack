import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CommentsRepository } from './repositories/coments.repository';
import { CreateCommentsDto } from './Dto/create-coments.dto';
import { UpdateCommentsDto } from './Dto/update-coments.dto';
import { UsersRepository } from '../users/repositories/user.repositoy';
import { AnouncementsRepository } from '../anouncements/repositories/anouncements.repository';

@Injectable()
export class CommentsService {
  constructor(
    private commentsRepositoy: CommentsRepository,
    private usersRespository: UsersRepository,
    private anouncementsRepository: AnouncementsRepository,
  ) {}

  async create(
    createCommenstDto: CreateCommentsDto,
    userId: string,
    anouncementId: string,
  ) {
    const anouncement =
      await this.anouncementsRepository.findOne(anouncementId);

    if (!anouncement) {
      throw new NotFoundException('Anouncement not found!');
    }

    const comment = await this.commentsRepositoy.create(
      createCommenstDto,
      userId,
      anouncementId,
    );

    return comment;
  }

  async findAllbyAnouncement(anouncementId: string) {
    const anouncement =
      await this.anouncementsRepository.findOne(anouncementId);

    if (!anouncement) {
      throw new NotFoundException('Anouncement not found!');
    }
    const allComments =
      await this.commentsRepositoy.findAllbyAnouncement(anouncementId);

    return allComments;
  }

  async update(data: UpdateCommentsDto, commentId: string, userId: string) {
    const find = await this.commentsRepositoy.findOne(commentId);

    if (!find) {
      throw new NotFoundException('Comment not found!');
    }

    if (find.userId !== userId) {
      throw new ForbiddenException('You dont have permitions!');
    }
    const comment = await this.commentsRepositoy.update(data, commentId);

    return comment;
  }

  async remove(id: string, userId: string, anouncementId: string) {
    const find = await this.commentsRepositoy.findOne(id);

    if (!find) {
      throw new NotFoundException('Comment not found!');
    }

    const user = await this.usersRespository.findOne(userId);
    const anouncement =
      await this.anouncementsRepository.findOne(anouncementId);

    if (user.type == 'comprador') {
      if (find.userId !== userId) {
        throw new ForbiddenException('You dont have permitions!');
      }
    }

    if (user.type == 'anunciante') {
      if (anouncement.userId == userId) {
        return await this.commentsRepositoy.remove(id);
      }
    }
    await this.commentsRepositoy.remove(id);
  }
}
