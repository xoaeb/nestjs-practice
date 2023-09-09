import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Header,
  NotFoundException,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private msgSvc: MessagesService) {}
  @Get()
  listMsg() {
    return this.msgSvc.findAll();
  }

  @Post()
  createMsg(@Body() body: CreateMessageDto) {
    return this.msgSvc.create(body.content);
  }
  @Get('/:id')
  async getMsg(@Param('id') id: string) {
    const messages = await this.msgSvc.findOne(id);

    if (!messages) {
      throw new NotFoundException('message not found');
    } else {
      return messages;
    }
  }
}
