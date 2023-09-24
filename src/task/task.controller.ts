import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, Task } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('new')
  create(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    console.log(title, description);
    return this.taskService.create(title, description);
  }

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }
}
