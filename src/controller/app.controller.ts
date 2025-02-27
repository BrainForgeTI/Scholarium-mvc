import { Get, Controller, Render, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { AppService } from 'src/model/app.service';
import { User } from 'src/model/entity/UserModel';
import { UserModel } from 'src/model/UserModel';

@Controller('usuarios')
export class AppController {

  constructor(
    private readonly userModel: UserModel,
  ) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Post()
  public async create(@Body() createUser: User) {
    return await this.userModel.createNewUser(createUser)
  }

  @Get('/find')
  public async findAll() {
    return await this.userModel.getAllUsers()
  }

  @Get('/find/:id')
  public async findById(@Param('id') id){
    return await this.userModel.getUsersById(id);
  }

  @Put(':id')
  public async update(@Param('id') id, @Body() updateUser: User) {
    return await this.userModel.updateUser(id, updateUser);
  }

  @Delete(':id')
  public async delete(@Param('id') id) {
    return await this.userModel.deleteUserById(id);
  }


}