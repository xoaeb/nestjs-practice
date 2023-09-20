import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private task = [];
  create(title: string, description: string) {
    return 'This action adds a new task';
  }

  getAllTasks() {
    return this.task;
  }
}
