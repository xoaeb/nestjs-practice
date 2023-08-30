import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Header,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMsg() {
    return 'hemloooo';
  }

  @Post()
  createMsg(@Body() body: CreateMessageDto) {
    console.log(body);
    return `post wala body ${body}`;
  }
  @Get(':id')
  getMsg(@Param() id: string) {
    return id;
  }
}
