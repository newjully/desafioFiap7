import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRegisterDTO } from './dto/createRegister.dto';
import { UpdateRegisterDTO } from './dto/updateRegister.dto';

@Injectable() 
export class RegisterService {
    async create(req: CreateRegisterDTO): Promise<string> {
        return `Cliente ${req.name} registrado(a) com sucesso!`;
    }

    async update(id: number, req: UpdateRegisterDTO): Promise<string> {
        return `Usuário ${id} atualizado(a) com sucesso!`;
    }
}