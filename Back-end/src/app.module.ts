import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/users.module';
import { AddressModule } from './modules/Address/address.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, AddressModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
