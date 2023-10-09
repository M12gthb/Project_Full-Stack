import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImagenDto {
  @IsString()
  @IsNotEmpty()
  image_url: string;
}
