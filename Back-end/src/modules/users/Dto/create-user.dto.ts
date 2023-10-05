import { ApiProperty } from '@nestjs/swagger';
import { Address, Types } from '@prisma/client';
import { hashSync } from 'bcryptjs';
import { Transform, Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from 'src/modules/Address/Dto/create-address.dto';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    default: 'Matheus Barros',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
    type: String,
    default: 'mat@mail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    type: String,
    default: '12345678',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @ApiProperty({
    description: 'cpf do usuário',
    type: String,
    default: '000.000.000-00',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(14)
  cpf: string;

  @ApiProperty({
    description: 'Data de nascimento do usuário',
    type: String,
    default: '12/12/2000',
  })
  @MinLength(8)
  @MaxLength(10)
  @IsNotEmpty()
  @IsString()
  birthdate: string;

  @ApiProperty({
    description: 'Descrição de usuário',
    type: String,
    default: 'Seu texto aqui',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Tipo de usuário',
    type: String,
    default: 'comprador',
    enum: ['comprador', 'anunciante'],
  })
  @IsNotEmpty()
  @IsEnum(Types)
  type: Types;

  @ApiProperty({
    description: 'Telefone do usuário',
    type: String,
    default: '88900000000',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(14)
  cell: string;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
