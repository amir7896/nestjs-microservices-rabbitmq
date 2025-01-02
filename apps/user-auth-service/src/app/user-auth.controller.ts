import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserAuthController {
  @MessagePattern({ cmd: 'authenticate' })
  authenticateUser(data: { username: string; password: string }) {
    if (data.username === 'test' && data.password === 'password') {
      return { success: true, userId: 1 };
    }
    return { success: false, message: 'Invalid credentials' };
  }
}
