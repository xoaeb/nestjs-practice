/* eslint-disable prettier/prettier */
import { readFile } from 'fs/promises';
export class MessagesRepository {
  //   async create(message: string) {}
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }
}
