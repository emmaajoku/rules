import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
const packjson = require('../../package.json')

@Controller()

export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('/')
  getHello(): void {
    return this.appService.getGeneralInfo();
  }
}
