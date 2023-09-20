import { MessagesModule } from 'src/messages/messages.module';
import { Module } from '@nestjs/common';
import { TaskModule } from 'src/task/task.module';

@Module({
  imports: [MessagesModule, TaskModule],
})
export class MainModule {}
