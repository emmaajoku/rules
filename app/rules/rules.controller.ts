import { Body, Controller, Get, Post, Delete, Put, Query, Param, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { RulesService } from './rules.service';
import { RulesDto } from './rules.dto';
import { Rules} from './rules.entity';

@Controller()
export class RulesController {
    constructor(
        private readonly rulesService: RulesService,
     ) {
    }

    @Post('/validate-rule')
    // tslint:disable-next-line: ban-types
    async getRules(@Body() rules: Object = {}): Promise<object> {
        return  this.rulesService.getValidateRule(rules);
    }


}
