import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsNumber,
} from 'class-validator';

export class CreateAddressDto {
  @ApiProperty({
    description: 'Cep do usuário',
    type: String,
    default: '00000-000',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(9)
  cep: string;

  @ApiProperty({
    description: 'Estado do usuário',
    type: String,
    default: 'Ceará',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  state: string;

  @ApiProperty({
    description: 'Cidade do usuário',
    type: String,
    default: 'Sobral',
  })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    description: 'Rua do usuário',
    type: String,
    default: 'Rua da esquina',
  })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({
    description: 'Numero da casa usuário',
    type: Number,
    default: '00',
  })
  @IsNumber()
  @IsNotEmpty()
  number: number;

  @ApiProperty({
    description: 'Complemento',
    type: String,
    default: 'Apartamento',
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  complement: string;
}
