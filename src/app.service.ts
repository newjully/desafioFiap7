import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem Vindo ao NestJS! Desafio 7 - Grupo 04 ';
  }
}
