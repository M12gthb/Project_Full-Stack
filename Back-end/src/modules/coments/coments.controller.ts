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
import { CommentsService } from './coments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateCommentsDto } from './Dto/update-coments.dto';
import { CreateCommentsDto } from './Dto/create-coments.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentServices: CommentsService) {}
  @Post(':anouncementId')
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createCommentsDto: CreateCommentsDto,
    @Request() req,
    @Param('anouncementId') anouncementId: string,
  ) {
    return this.commentServices.create(
      createCommentsDto,
      req.user.id,
      anouncementId,
    );
  }

  @Patch(':comentId')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('comentId') id: string,
    @Body() updateCommentsDto: UpdateCommentsDto,
    @Request() req,
  ) {
    return this.commentServices.update(updateCommentsDto, id, req.user.id);
  }

  @HttpCode(204)
  @Delete(':comentId/:anouncementId')
  @UseGuards(JwtAuthGuard)
  remove(
    @Param('comentId') id: string,
    @Param('anouncementId') anouncementId: string,
    @Request() req,
  ) {
    return this.commentServices.remove(id, req.user.id, anouncementId);
  }

  @Get(':comentId')
  @UseGuards(JwtAuthGuard)
  findByAnouncement(@Param('comentId') id: string) {
    return this.commentServices.findAllbyAnouncement(id);
  }
}
