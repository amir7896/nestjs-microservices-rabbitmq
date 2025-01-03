import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Product, ProductDocument } from '../schemas/product.schema';
import { CreateProductDto } from '../dtos/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}
  getProducts() {
    return [
      { id: 1, name: 'Product A', price: 100 },
      { id: 2, name: 'Product B', price: 200 },
      { id: 3, name: 'Product C', Price: 300 },
      { id: 4, name: 'Product D', Price: 400 },
    ];
  }

  // Create product

  async createProduct(body: CreateProductDto) {
    const newProduct = new this.productModel(body);
    return newProduct.save();
  }
}
