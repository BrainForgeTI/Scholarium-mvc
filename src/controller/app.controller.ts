import { Get, Controller, Render, Post, Param, Body, Delete, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from 'src/model/app.service';
import { User } from 'src/model/entity/UserModel';
import { UserModel } from 'src/model/UserModel';

@Controller('usuarios')
export class AppController {

  constructor(
    private readonly userModel: UserModel,
  ) { }

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Post()
  public async create(@Body() createUser: User, @Res() res: Response) {
    console.log(createUser)

    try {
      const result = await this.userModel.createNewUser(createUser)

      if (result) {
        // return res.send(`<h1>Formulário enviado com sucesso!</h1><p>Nome: ${result.firstName + ' ', + result.lastName}</p><p>Email: ${result.email}</p><p>Gênero: ${result.gender}</p>`);
        return res.send(
          `
          <style>
            @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  
            body { margin: 0; padding: 0; font-family: Poppins; 'san-serif' }
          </style>
  
          <div style="width: 100dvw; height: 100dvh; background: #13111A; display: flex; justify-content: center; align-items: center; flex-direction: column; color: white">
            <h1>Conta criada com sucesso!</h1>
            <p>Nome: ${result.firstName} ${result.lastName}</p>
            <p>Email: ${result.email}</p>
            <p>Id da conta: ${result._id}</p>
          </div>
        `
        )
      } else {
        res.send(`
            <style>
              @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  
              body { margin: 0; padding: 0; font-family: Poppins; 'san-serif' }
            </style>
  
            <div style="width: 100dvw; height: 100dvh; background: #13111A; display: flex; justify-content: center; align-items: center; flex-direction: column; color: white">
              <h1>Erro ao criar sua conta :(</h1>
            </div>
          `)
      }
    } catch (e) {
      res.send(`
        <style>
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

          body { margin: 0; padding: 0; font-family: Poppins; 'san-serif' }
        </style>

        <div style="width: 100dvw; height: 100dvh; background: #13111A; display: flex; justify-content: center; align-items: center; flex-direction: column; color: white">
          <h1>Erro ao criar sua conta :(</h1>
          <p>${e.message}</p>
        </div>
      `)
    }

  }

  @Get('/find')
  public async findAll() {
    return await this.userModel.getAllUsers()
  }

  @Get('/find/:id')
  public async findById(@Param('id') id) {
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