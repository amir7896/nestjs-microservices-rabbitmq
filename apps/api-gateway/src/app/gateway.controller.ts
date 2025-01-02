import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class GatewayController {
  constructor(
    @Inject('USER_AUTH_SERVICE') private readonly userAuthClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy
  ) {}

  @Get('auth')
  authenticate() {
    return this.userAuthClient.send(
      { cmd: 'authenticate' },
      { username: 'test', password: 'password' }
    );
  }

  @Get('products')
  getProducts() {
    return this.productClient.send({ cmd: 'get-products' }, {});
  }
}
