import { CreateAddressDto } from '../Dto/create-address.dto';
import { UpdateAddressDto } from '../Dto/update-address.dto';
import { Address } from '../entities/address.entity';

export abstract class AddressRepository {
  abstract update(data: UpdateAddressDto, userId: string): Promise<Address>;
  abstract create(data: CreateAddressDto, userId: string): Promise<Address>;
}
