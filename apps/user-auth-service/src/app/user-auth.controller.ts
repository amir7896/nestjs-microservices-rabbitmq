import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserAuthService } from './user-atuh.service';

@Controller()
export class UserAuthController {
  constructor(private readonly userService: UserAuthService) {}
  @MessagePattern({ cmd: 'authenticate' })
  getUser(data: { username: string; password: string }) {
    return this.userService.getUser(data);
  }
}
