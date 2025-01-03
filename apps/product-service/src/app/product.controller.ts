import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { CreateProductDto } from '../dtos/product.dto';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @MessagePattern('get-products')
  getProducts() {
    return this.productService.getProducts();
  }

  @MessagePattern('create-product')
  async createProduct(@Payload() product: CreateProductDto) {
    return await this.productService.createProduct(product);
  }
}
