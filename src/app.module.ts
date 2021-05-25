import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ModulesModule } from "./modules/modules.module";
import { ConsultaModule } from './modules/consulta/consulta.module';
import { PacienteModule } from './modules/paciente/paciente.module';
import { FuncionarioModule } from './modules/funcionario/funcionario.module';
import { ProntuarioModule } from './modules/prontuario/prontuario.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), ModulesModule, ConsultaModule, PacienteModule, FuncionarioModule, ProntuarioModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule { }
