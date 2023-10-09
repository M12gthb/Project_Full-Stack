import { ApiProperty } from '@nestjs/swagger';
import { Fuel } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateImagenDto } from 'src/modules/images/Dto/create-images.dto';

export class CreateAnouncementsDto {
  @ApiProperty({
    description: 'Marca do veículo',
    type: String,
    default: 'Chevrolet',
  })
  @IsNotEmpty()
  @IsString()
  brand: string;

  @ApiProperty({
    description: 'Modelo do veículo',
    type: String,
    default: 'camaro ss 6.2 v8 16v',
  })
  @IsNotEmpty()
  @IsString()
  model: string;

  @ApiProperty({
    description: 'Ano de fabricação do veículo',
    type: Number,
    default: '2018',
  })
  @IsNotEmpty()
  @IsNumber()
  year: number;

  @ApiProperty({
    description: 'Tipo de combustível do veículo',
    type: String,
    default: 'gasolina',
    enum: ['gasolina', 'etanol'],
  })
  @IsNotEmpty()
  @IsEnum(Fuel)
  fuel: Fuel;

  @ApiProperty({
    description: 'Quilometragem do veículo',
    type: Number,
    default: '30.0000',
  })
  @IsNotEmpty()
  @IsNumber()
  mileage: number;

  @ApiProperty({
    description: 'Cor do veículo',
    type: String,
    default: 'black',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  color: string;

  @ApiProperty({
    description: 'Preço tabela FIPE',
    type: Number,
    default: '48.000',
  })
  @IsNotEmpty()
  @IsNumber()
  priceTabel: number;

  @ApiProperty({
    description: 'Preço do veículo',
    type: Number,
    default: '50.000',
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'Descrição do veículo',
    type: String,
    default: 'Sua descrição aqui',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Status do anuncio',
    type: Boolean,
    default: 'False',
  })
  @IsNotEmpty()
  @IsBoolean()
  publish: boolean;

  @ApiProperty({
    description: 'url da imagem',
    type: String,
    default:
      'https://s2-autoesporte.glbimg.com/yhAGA67nr25Iauc9mUeVxYmHzgw=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/4/3/QnE8d3QDS4wyARlD13AQ/2015-05-16-2016-chevrolet-camaro-ss-002.png',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(12)
  cover_img: string;

  @IsArray()
  @ValidateNested()
  @Type(() => CreateImagenDto)
  images: CreateImagenDto[];
}
