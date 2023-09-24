import { Injectable } from '@nestjs/common';
import { CreateTaskDto, STATUS } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './dto/create-task.dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class TaskService {
  private task: Task[] = [];
  create(taskDto: CreateTaskDto) {
    const { title, description } = taskDto;
    const task: any = {
      id: uuid(),
      description,
      title,
      status: STATUS.OPEN,
    };
    this.task.push(task);
    return task;
  }

  getAllTasks() {
    return this.task;
  }

  getTaskById(id: string) {
    return this.task.find((task) => task.id === id);
  }

  deleteById(id: string) {
    return (this.task = this.task.filter((task) => task.id !== id));
  }
}
