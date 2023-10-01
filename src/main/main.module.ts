import { MessagesModule } from 'src/messages/messages.module';
import { Module } from '@nestjs/common';
import { TaskModule } from 'src/task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MessagesModule,
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-mgmt',
      entities: ['src/task/entities/task.entity.ts.ts'],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class MainModule {}
//hi
