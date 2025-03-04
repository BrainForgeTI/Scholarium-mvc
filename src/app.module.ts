import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './model/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './model/entity/UserModel';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModel } from './model/UserModel';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configureService: ConfigService) => ({
        uri: 'mongodb://localhost:27017/scholarium'
      })
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  controllers: [AppController],
  providers: [AppService, UserModel],
})
export class AppModule {
}
