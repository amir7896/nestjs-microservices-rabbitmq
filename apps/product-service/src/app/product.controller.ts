import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @MessagePattern({ cmd: 'get-products' })
  getProducts() {
    return this.productService.getProducts();
  }
}
