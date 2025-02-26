import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from 'src/model/app.service';

@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}