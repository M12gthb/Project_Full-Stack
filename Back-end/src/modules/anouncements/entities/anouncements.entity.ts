import { Fuel } from '@prisma/client';
import { randomUUID } from 'crypto';
import { Images } from 'src/modules/images/entities/images.entity';
import { User } from 'src/modules/users/entities/user.entitie';

export class Anouncements {
  readonly id: string;
  brand: string;
  model: string;
  year: number;
  fuel: Fuel;
  mileage: number;
  color: string;
  priceTabel: number;
  price: number;
  description: string;
  publish: boolean;
  cover_img: string;
  userId?: string;
  constructor() {
    this.id = randomUUID();
  }
  imagens?: Images[];
  users?: User;
}
