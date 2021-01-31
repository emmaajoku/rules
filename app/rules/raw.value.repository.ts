
import {EntityRepository, Repository} from 'typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';

import { RawValues } from './raw.value.entity';

@EntityRepository(RawValues)
export class RulesRepository extends Repository<RawValues> {

    async validateRule(conditions: object = {}): Promise<any>{
        try {
            const rawValuesData = await this.find({ where: conditions });
            return rawValuesData;
        } catch (error) {
            throw new BadRequestException(error.toString());
        }
        }
    

}
