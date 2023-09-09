import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(
    private msgRepo: MessagesRepository, //WONT BE USING IN PROJECT!!, WE'LL USE DEPENDENCY INJECTION INSTEAD
  ) {}
  create(message: string) {
    return this.msgRepo.create(message);
  }

  findAll() {
    return this.msgRepo.findAll();
  }

  findOne(id: string) {
    return this.msgRepo.findOne(id);
  }
}
