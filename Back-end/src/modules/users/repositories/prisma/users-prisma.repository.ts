import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../Dto/create-user.dto';
import { UpdateUserDto } from '../../Dto/update-user.dto';
import { User } from '../../entities/user.entitie';
import { UsersRepository } from '../user.repositoy';
import { PrismaService } from 'src/modules/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    const { address, ...rest } = data;
    const user = new User();
    Object.assign(user, { ...rest });

    const newUser = await this.prisma.user.create({
      data: {
        birthdate: user.birthdate,
        cell: user.cell,
        cpf: user.cpf,
        description: user.description,
        email: user.email,
        id: user.id,
        name: user.name,
        password: user.password,
        type: user.type,
      },
    });

    return plainToInstance(User, newUser);
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findCpf(cpf: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { cpf },
    });
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { id },
      include: { address: true },
    });
    return plainToInstance(User, user);
  }

  async update(data: UpdateUserDto, id: string): Promise<User> {
    const { address, ...rest } = data;
    const user = await this.prisma.user.update({
      where: { id },
      include: { address: true },
      data: { ...rest },
    });
    return plainToInstance(User, user);
  }

  async remove(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
      include: { address: true },
    });
  }
}
