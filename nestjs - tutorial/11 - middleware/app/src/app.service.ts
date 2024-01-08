import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  users(): string {
    return 'get users!';
  }
  user(id: string) {
    return `get this user ${id}`;
  }
  create(): string {
    return 'post user';
  }
}
