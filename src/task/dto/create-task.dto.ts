export class CreateTaskDto {
  title: string;
  description: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: STATUS;
}
export enum STATUS {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
