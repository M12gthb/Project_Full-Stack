import { Injectable } from '@nestjs/common';
import { Address } from '../../entities/address.entity';
import { PrismaService } from 'src/modules/database/prisma.service';
import { UpdateAddressDto } from '../../Dto/update-address.dto';
import { AddressRepository } from '../address.repository';
import { CreateAddressDto } from '../../Dto/create-address.dto';

@Injectable()
export class AddressPrismaRepository implements AddressRepository {
  constructor(private prisma: PrismaService) {}
  async update(data: UpdateAddressDto, addressId: string): Promise<Address> {
    const address = await this.prisma.address.update({
      where: { id: addressId },
      data: { ...data },
    });
    return address;
  }

  async create(data: CreateAddressDto, userId: string): Promise<Address> {
    const address = new Address();
    Object.assign(address, { ...data });

    const newAddress = await this.prisma.address.create({
      data: {
        id: address.id,
        cep: address.cep,
        city: address.city,
        state: address.state,
        street: address.state,
        number: address.number,
        complement: address.complement,
        userId,
      },
    });

    return newAddress;
  }
}
