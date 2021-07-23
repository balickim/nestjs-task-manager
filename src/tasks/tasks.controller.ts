import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { getTasksFilterDto } from './dto/get-tasks-filter.dto';
import { updateTaskStatusDto } from './dto/update-task-status.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto: getTasksFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): Task[] {
  //   return this.tasksService.deleteTaskById(id);
  // }

  // @Post()
  // createTask(@Body() createTaskDto: createTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Patch('/:id/status')
  // updateTaskById(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: updateTaskStatusDto,
  // ): Task {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateTaskById(id, status);
  // }
}
