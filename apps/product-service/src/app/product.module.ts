import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService, ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from '../schemas/product.schema';

const schemaObject = {
  MONGO_URI: Joi.string().required(),
};

@Module({
  imports: [
    //
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.example', '.env'], // array for add env for production
      validationSchema: Joi.object(schemaObject),
    }), // Env config
    MongooseModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        uri: `${config.get('MONGO_URI')}`,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
