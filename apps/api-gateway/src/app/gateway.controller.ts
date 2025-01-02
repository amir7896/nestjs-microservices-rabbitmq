import { Controller, Get, Inject } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';

@Controller()
export class GatewayController {
  constructor(
    @Inject('USER_AUTH_SERVICE') private readonly userAuthClient: ClientRMQ,
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientRMQ
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
