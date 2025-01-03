import { Controller, Get, Inject, Post, Body } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { CreateProductDto } from '../dtos/product.dto';

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

  // Get Products
  @Get('products')
  getProducts() {
    return this.productClient.send('get-products', {});
  }

  // Create Product
  @Post('products')
  async createProduct(@Body() productDto: CreateProductDto) {
    return await this.productClient.send('create-product', {
      ...productDto,
    });
  }
}
