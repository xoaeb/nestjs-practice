/* eslint-disable prettier/prettier */
import { writeFile } from 'fs/promises';
import { readFile } from 'fs/promises';
export class MessagesRepository {
  async findOne(id: string) {
    console.log(id)
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));

    return messages
  }
}
