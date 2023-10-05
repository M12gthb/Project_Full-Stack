import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user.dto';
import { UsersRepository } from './repositories/user.repositoy';
import { UpdateUserDto } from './Dto/update-user.dto';
import { AddressService } from '../Address/address.service';

@Injectable()
export class UsersService {
  constructor(
    private usersRepositoy: UsersRepository,
    private addressService: AddressService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.usersRepositoy.findByEmail(createUserDto.email);
    const findCpf = await this.usersRepositoy.findCpf(createUserDto.cpf);

    if (findUser) {
      throw new ConflictException('User already exists');
    }
    if (findCpf) {
      throw new ConflictException('Cpf already registrade');
    }

    const { address, ...rest } = createUserDto;

    const user = await this.usersRepositoy.create(createUserDto);
    const addressCreate = await this.addressService.create(address, user.id);

    const newUser = await this.usersRepositoy.findOne(user.id);
    return newUser;
  }

  async find() {
    const users = this.usersRepositoy.findAll();
    return users;
  }

  async findOne(id: string) {
    const user = await this.usersRepositoy.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found !');
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepositoy.findByEmail(email);
    return user;
  }

  async update(
    data: UpdateUserDto,
    id: string,
    userId: string,
    email: string | undefined,
    cpf: string | undefined,
  ) {
    if (id !== userId) {
      throw new ForbiddenException('You dont have permitions');
    }
    const user = await this.usersRepositoy.findOne(id);
    const cpfValidate = await this.usersRepositoy.findCpf(String(cpf));
    const emailValidate = await this.usersRepositoy.findByEmail(String(email));
    const { address } = data;
    if (!user) {
      throw new NotFoundException('user not found');
    }
    if (cpfValidate) {
      throw new ConflictException('Cpf alredy exist !');
    }
    if (emailValidate) {
      throw new ConflictException('Email alredy exist !');
    }
    if (address) {
      await this.addressService.update(address, user.address[0].id);
    }

    const newuser = await this.usersRepositoy.update(data, id);

    return newuser;
  }

  async remove(id: string, userId: string) {
    const user = await this.usersRepositoy.findOne(id);

    if (!user) {
      throw new NotFoundException('user not found');
    }
    if (id !== userId) {
      throw new ForbiddenException('You dont have permitions');
    }
    await this.usersRepositoy.remove(user.id);
  }
}
