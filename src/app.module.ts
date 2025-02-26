import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './model/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
