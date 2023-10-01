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
import { CreateTaskDto, STATUS } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  @Post('new')
  create(@Body() taskDto: CreateTaskDto): any {
    // return this.taskService.create(taskDto);
  }

  @Get()
  getAllTasks() {
    // return this.taskService.getAllTasks();
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string) {
    // return this.taskService.deleteById(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(@Param('id') id: string, @Body('status') status: STATUS) {
    // return this.taskService.updateTaskById(id, status);
  }
}
