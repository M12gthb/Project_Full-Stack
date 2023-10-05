import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.services';
import { UsersRepository } from './repositories/user.repositoy';
import { UserPrismaRepository } from './repositories/prisma/users-prisma.repository';
import { PrismaService } from '../database/prisma.service';
import { AddressModule } from '../Address/address.module';

@Module({
  imports: [AddressModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UserPrismaRepository,
    },
  ],
  exports: [UsersService],
})
export class UserModule {}
