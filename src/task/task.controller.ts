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
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('new')
  create(@Body() createTaskDto: any) {
    console.log(createTaskDto);
    // return this.taskService.create(createTaskDto); safdas
  }

  @Get()
  findAll() {
    return this.taskService.getAllTasks();
  }
}
