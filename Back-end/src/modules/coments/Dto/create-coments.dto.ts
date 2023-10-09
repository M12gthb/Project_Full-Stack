import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateUserDto } from 'src/modules/users/Dto/create-user.dto';

export class CreateCommentsDto {
  @ApiProperty({
    description: 'Conteúdo do comentário',
    type: String,
    default: 'Seu comentário aqui',
  })
  @IsString()
  @IsNotEmpty()
  comment: string;

  @ValidateNested()
  @Type(() => CreateCommentsDto)
  anouncement: CreateCommentsDto;

  @ValidateNested()
  @Type(() => CreateUserDto)
  user: CreateUserDto;
}
