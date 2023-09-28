import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { STATUS } from '../dto/create-task.dto';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  description: string;
  @Column()
  title: string;
  @Column()
  status: STATUS;
}
