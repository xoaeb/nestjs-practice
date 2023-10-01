import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto, STATUS } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { v4 as uuid } from 'uuid';
import { writeFile, readFile } from 'fs/promises';
import { NotFoundError } from 'rxjs';
import { Task } from './entities/task.entity';
import { TaskRepository } from './task.repository';
@Injectable()
export class TaskService {
  constructor(private taskRepo: TaskRepository) {}

  async getTaskById(id: any): Promise<Task> {
    console.log(id);
    const contents = await this.taskRepo.findOne(id);
    if (!contents) {
      throw new NotFoundException();
    }

    return contents;
  }

  // private task: Task[] = [];
  // async create(taskDto: CreateTaskDto) {
  //   const contents = await readFile('tasks.json', 'utf8');
  //   const taskList = JSON.parse(contents);
  //   const { title, description } = taskDto;
  //   const task: any = {
  //     id: uuid(),
  //     description,
  //     title,
  //     status: STATUS.OPEN,
  //   };
  //   taskList.push(task);
  //   await writeFile('tasks.json', JSON.stringify(taskList));
  //   return task;
  // }
  // async getAllTasks() {
  //   const contents = await readFile('tasks.json', 'utf8');
  //   const taskList = JSON.parse(contents);
  //   return taskList;
  // }

  // async deleteById(id: string) {
  //   const contents = await readFile('tasks.json', 'utf8');
  //   let taskList = JSON.parse(contents);
  //   taskList = taskList.filter((task) => task.id !== id);
  //   await writeFile('tasks.json', JSON.stringify(taskList));
  //   return taskList;
  // }
  // updateTaskById(id: string, status: STATUS) {
  //   const myTask: any = this.getTaskById(id);
  //   myTask.status = status;
  //   return myTask;
  // }
}
