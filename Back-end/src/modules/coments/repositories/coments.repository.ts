import { CreateCommentsDto } from '../Dto/create-coments.dto';
import { UpdateCommentsDto } from '../Dto/update-coments.dto';
import { Comments } from '../entities/coments.entity';

export abstract class CommentsRepository {
  abstract create(
    data: CreateCommentsDto,
    userId: string,
    anouncementId: string,
  ): Promise<Comments>;
  abstract findAllbyAnouncement(anouncementId: string): Promise<Comments[]>;
  abstract update(data: UpdateCommentsDto, id: string): Promise<Comments>;
  abstract remove(id: string): Promise<void>;
  abstract findOne(id: string): Promise<Comments>;
}
