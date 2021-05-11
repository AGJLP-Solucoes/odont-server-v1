import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {configService} from './config/config.service';
import {PessoaModule} from "./modules/pessoa/pessoa.module";
import {APP_FILTER} from "@nestjs/core";
import {HttpExceptionFilter} from "./filters/http-exception.filter";

@Module({
    imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),

    ],
    controllers: [AppController],
    providers: [AppService, {
        provide: APP_FILTER,
        useClass: HttpExceptionFilter,
    },],
})
export class AppModule {
}
