import { Injectable, NotFoundException } from '@nestjs/common';
import { AddressRepository } from './repositories/address.repository';
import { UpdateAddressDto } from './Dto/update-address.dto';
import { CreateAddressDto } from './Dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(private addressRepository: AddressRepository) {}
  async update(data: UpdateAddressDto, userId: string) {
    const user = this.addressRepository.update(data, userId);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }
  async create(createAddressDto: CreateAddressDto, userId: string) {
    const address = await this.addressRepository.create(
      createAddressDto,
      userId,
    );
    return address;
  }
}
