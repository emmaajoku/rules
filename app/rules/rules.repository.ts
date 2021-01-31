import {EntityRepository, Repository} from 'typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';

import { Rules } from './rules.entity';
import { RulesDto } from './rules.dto';


@EntityRepository(Rules)
export class RulesRepository extends Repository<Rules> {

    async validateRule(field: string): Promise<any>{
        try {
            const rulesData = await this.find({ where: field });
            return rulesData;
        } catch (error) {
            throw new BadRequestException(error.toString());
        }
        }
}
