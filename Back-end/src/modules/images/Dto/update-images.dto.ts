import { CreateImagenDto } from './create-images.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateImageDto extends PartialType(CreateImagenDto) {}
