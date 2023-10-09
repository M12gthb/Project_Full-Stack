import { PartialType } from '@nestjs/swagger';
import { CreateCommentsDto } from './create-coments.dto';

export class UpdateCommentsDto extends PartialType(CreateCommentsDto) {}
