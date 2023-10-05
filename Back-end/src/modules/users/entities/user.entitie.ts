import { Types } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';
import { Address } from 'src/modules/Address/entities/address.entity';

export class User {
  readonly id: string;
  name: string;
  email: string;
  cpf: string;
  cell: string;
  birthdate: string;
  description: string;
  type: Types;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
  address?: Address;
}
