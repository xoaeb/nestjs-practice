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
import { CreateTaskDto, STATUS, Task } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('new')
  create(@Body() taskDto: CreateTaskDto): any {
    return this.taskService.create(taskDto);
  }

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string) {
    return this.taskService.deleteById(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(@Param('id') id: string, @Body('status') status: STATUS) {
    return this.taskService.updateTaskById(id, status);
  }
}
