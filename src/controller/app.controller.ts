import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from 'src/model/app.service';
import { User } from 'src/model/entity/UserModel';
import { UserModel } from 'src/model/UserModel';

@Controller()
export class AppController {

  constructor(
    private readonly userModel: UserModel
  ) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}