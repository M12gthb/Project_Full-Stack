import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/users.module';
import { AddressModule } from './modules/Address/address.module';
import { AuthModule } from './modules/auth/auth.module';
import { AnouncementModule } from './modules/anouncements/anouncements.module';
import { CommentsModule } from './modules/coments/coments.module';

@Module({
  imports: [
    UserModule,
    AddressModule,
    AuthModule,
    AnouncementModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
