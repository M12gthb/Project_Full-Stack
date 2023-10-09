import { PartialType } from '@nestjs/swagger';
import { CreateAnouncementsDto } from './create-anouncements.dto';

export class UpdateAnounceamentsDto extends PartialType(
  CreateAnouncementsDto,
) {}
