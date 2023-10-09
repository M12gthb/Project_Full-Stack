import { CreateAnouncementsDto } from '../Dto/create-anouncements.dto';
import { UpdateAnounceamentsDto } from '../Dto/update-anouncements.dto';
import { Anouncements } from '../entities/anouncements.entity';

export abstract class AnouncementsRepository {
  abstract create(
    data: CreateAnouncementsDto,
    userId: string,
  ): Promise<Anouncements>;
  abstract findAll(): Promise<Anouncements[]>;
  abstract findOne(id: string): Promise<Anouncements | null>;
  abstract findByUser(id: string): Promise<Anouncements[]>;
  abstract update(
    data: UpdateAnounceamentsDto,
    id: string,
  ): Promise<Anouncements>;
  abstract remove(id: string, userId: string): Promise<void>;
}
