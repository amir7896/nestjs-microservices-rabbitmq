import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService, ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { UserAuthController } from './user-auth.controller';
import { User, UserSchema } from '../schemas/user.schema';
import { UserAuthService } from './user-atuh.service';

const schemaObject = {
  MONGO_URI: Joi.string().required(),
};

@Module({
  imports: [
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
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserAuthController],
  providers: [UserAuthService],
})
export class UserAuthModule {}
