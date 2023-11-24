import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './repositories/user.repositoy';
import { UserPrismaRepository } from './repositories/prisma/users-prisma.repository';
import { PrismaService } from '../database/prisma.service';
import { AddressModule } from '../Address/address.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from 'src/utils/mail.service';

@Module({
  imports: [
    AddressModule,
    MailerModule.forRoot({
      transport: {
        host: 'stmp.gmail.com',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        defaults: {
          from: 'mat43214@gmail.com',
        },
      },
    }),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    MailService,
    {
      provide: UsersRepository,
      useClass: UserPrismaRepository,
    },
  ],
  exports: [UsersService, UsersRepository],
})
export class UserModule {}
