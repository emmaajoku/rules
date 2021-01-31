import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RulesController } from './rules.controller';
import { RulesService } from 'app/rules/rules.service';
import { RulesRepository } from 'app/rules/rules.repository';

@Module({
    imports: [
      TypeOrmModule.forFeature([RulesRepository]),HttpModule
    ],
    controllers: [RulesController],
    providers: [
      RulesService,
    ],
  })
export class RulesModule {}
