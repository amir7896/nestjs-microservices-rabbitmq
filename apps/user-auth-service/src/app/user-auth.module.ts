import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserAuthController } from './user-auth.controller';
import { User, UserSchema } from '../schemas/user.schema';
import { UserAuthService } from './user-atuh.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/auth-service'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserAuthController],
  providers: [UserAuthService],
})
export class UserAuthModule {}
