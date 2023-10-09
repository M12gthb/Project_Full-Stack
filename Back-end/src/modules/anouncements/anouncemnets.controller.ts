import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UpdateAnounceamentsDto } from './Dto/update-anouncements.dto';
import { CreateAnouncementsDto } from './Dto/create-anouncements.dto';
import { AnouncementService } from './anouncements.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('anouncements')
export class AnouncementsController {
  constructor(private readonly anouncementServices: AnouncementService) {}
  @Post('')
  @UseGuards(JwtAuthGuard)
  create(@Body() createAnouncementsDto: CreateAnouncementsDto, @Request() req) {
    return this.anouncementServices.create(createAnouncementsDto, req.user.id);
  }

  @Get()
  find() {
    return this.anouncementServices.findAll();
  }

  @Get(':anouncementId')
  findOne(@Param('id') id: string) {
    return this.anouncementServices.findOne(id);
  }

  @Get('user/:userId')
  findByUser(@Param('userId') id: string) {
    return this.anouncementServices.findOne(id);
  }

  @Patch(':anouncementId')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('anouncementId') id: string,
    @Body() updateAnounceamentsDto: UpdateAnounceamentsDto,
    @Request() req,
  ) {
    return this.anouncementServices.update(
      updateAnounceamentsDto,
      id,
      req.user.id,
    );
  }

  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  @Delete(':anouncementId')
  remove(@Param('anouncementId') id: string, @Request() req) {
    return this.anouncementServices.remove(id, req.user.id);
  }
}
