import { Injectable } from '@nestjs/common';
import { getApplicationStatus } from './lib/utils'
const packjson = require('../../package.json')



@Injectable()
export class AppService {
  application: any

  constructor(
    
  ) {
 
    this.application = {
      name: '',
      github: '',
      twitter: '',
      mobile: '',
      email: '',
    }
  }


  getGeneralInfo(): void {
    this.application.name = packjson.author
    this.application.github = packjson.github
    this.application.twitter = packjson.twitter
    this.application.mobile = packjson.mobile
    this.application.email = packjson.email


    const userData: any = getApplicationStatus(packjson.description, 'success', this.application)

    return userData;
  }

}
