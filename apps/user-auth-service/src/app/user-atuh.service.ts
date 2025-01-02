import { Injectable } from '@nestjs/common';

@Injectable()
export class UserAuthService {
  getUser(data: { username: string; password: string }) {
    if (data.username === 'test' && data.password === 'password') {
      return { success: true, userId: 1, username: 'Amir Shahzad' };
    }
    return { success: false, message: 'Invalid credentials' };
  }
}
