import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import Logger from "@pnpmworkspace/logger/src/index";



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    Logger('Abrindo o endpoint do Hello World!')
    return this.appService.getHello();
  }
}
