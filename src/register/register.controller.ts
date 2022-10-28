import { Controller, Post, Body, Param, Get, Patch, ParseUUIDPipe } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDTO } from './dto/createRegister.dto';
import { UpdateRegisterDTO } from './dto/updateRegister.dto';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
   async create(@Body() req:CreateRegisterDTO) {
    return this.registerService.create(req);
  }
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: number, 
  @Body() req:UpdateRegisterDTO) {
      return this.registerService.update(+id, req);
  }
}
