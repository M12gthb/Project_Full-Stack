import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { AddressRepository } from './repositories/address.repository';
import { AddressPrismaRepository } from './repositories/prisma/address-prisma.repositoy';
import { AddressService } from './address.service';

@Module({
  providers: [
    AddressService,
    PrismaService,
    {
      provide: AddressRepository,
      useClass: AddressPrismaRepository,
    },
  ],
  exports: [AddressService],
})
export class AddressModule {}
