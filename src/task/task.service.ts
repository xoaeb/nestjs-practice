import { Injectable } from '@nestjs/common';
import { CreateTaskDto, STATUS } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './dto/create-task.dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class TaskService {
  private task: Task[] = [];
  create(title: string, description: string) {
    const task: any = {
      id: uuid(),
      description: description,
      title: title,
      status: STATUS.OPEN,
    };
    this.task.push(task);
    return task;
  }

  getAllTasks() {
    return this.task;
  }
}
