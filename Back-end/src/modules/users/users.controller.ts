import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  HttpCode,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './Dto/create-user.dto';
import { UpdateUserDto } from './Dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  find() {
    return this.userService.find();
  }

  @Get(':userId')
  findOne(@Param('userId') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':userId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(
    @Param('userId') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req,
  ) {
    return this.userService.update(
      updateUserDto,
      id,
      req.user.id,
      updateUserDto.email,
      updateUserDto.cpf,
    );
  }

  @HttpCode(204)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':userId')
  remove(@Param('userId') id: string, @Request() req) {
    return this.userService.remove(id, req.user.id);
  }
}
