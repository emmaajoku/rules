import { Injectable, Inject, Dependencies, HttpException, HttpStatus} from '@nestjs/common';
import { Rules } from './rules.entity';
import { RulesDto } from 'app/rules/rules.dto';
import { RulesRepository } from 'app/rules/rules.repository';
import { onFailure } from '../lib/utils';

@Injectable()
export class RulesService {
    constructor(
        private rulesRepository: RulesRepository,
    ) {

    }

    /**
     * 
     * @param params 
     */

     validateNotEmptyField = (params: any) => {

        if (params && params.rule && !params.rule) {
            throw new HttpException(onFailure('rule is required.', 'error', null), 400);
        } 

         if(params && params.rule && !params.rule.field) {
            throw new HttpException(onFailure('field "field" is missing from rule.', 'error', null), 400);
        }

        if(params && params.rule && !params.rule.condition) {
            throw new HttpException(onFailure('field condition is missing from rule.', 'error', null), 400);
        }

        if(params && params.rule && !params.rule.condition_value) {
            throw new HttpException(onFailure('field condition_value is missing from rule.', 'error', null), 400);
        } 

        if(params && !params.data) {
            throw new HttpException(onFailure('data is required', 'error', null), 400);
        } 

        if(params && params.data && !params.data.name) {
            throw new HttpException(onFailure('field crew is missing from data.', 'error', null), 400);
        } 

        if(params && params.data && !params.data.crew) {
            throw new HttpException(onFailure('field name is missing from data.', 'error', null), 400);
        } 

        if(params && params.data && !params.data.age) {
            throw new HttpException(onFailure('field age is missing from data.', 'error', null), 400);
        } 

        if(params && params.data && !params.data.position) {
            throw new HttpException(onFailure('field position is missing from data.', 'error', null), 400);
        } 

        if(params && params.data && !params.data.missions) {
            throw new HttpException(onFailure('field missions is missing from data.', 'error', null), 400);
        }
     }
    
    /**
     * 
     * @param params 
     */
    validateDataType = (params: any) => {
         
       if(typeof params.rule !== 'object') {
            throw new HttpException(onFailure('rule should be an object.', 'error', null), 400);
        }

        if (typeof params.rule.field !== 'string') {
            throw new HttpException(onFailure('field field in rule should be a string.', 'error', null), 400);
        } 
        if (typeof params.rule.condition !== 'string') {
            throw new HttpException(onFailure('field condition in rule should be a string.','error', null), 400);
        }

        if (typeof params.rule.condition_value !== 'number') {
            throw new HttpException(onFailure('field condition_value in rule should be a number.', 'error', null), 400);
        } 

       if(typeof params.data !== 'object') {
            throw new HttpException(onFailure('data should be an object.', 'error', null), 400);
        } 

        if (typeof params.data.crew !== 'string') {
            throw new HttpException(onFailure('field crew in data should be a string', 'error', null), 400);
        } 

        if (typeof params.data.name !== 'string') {
            throw new HttpException(onFailure('field name in data should be a string', 'error', null), 400);
        } 

        if (typeof params.data.age !== 'number') {
            throw new HttpException(onFailure('field age in data should be a number', 'error', null), 400);
        } 

        if (typeof params.data.position !== 'string') {
            throw new HttpException(onFailure('field position in data should be a string', 'error', null), 400);
        } 

        if (typeof params.data.missions !== 'number') {
            throw new HttpException(onFailure('field missions in data should be a number', 'error', null), 400);
        }
     }
    

    /**
     * 
     * @param conditions 
     * @returns
     */
    async validateRule(conditions: string): Promise<Rules> {
        return await this.rulesRepository.validateRule(conditions);
    }

    /**
     * 
     * @param params 
     * @returns
     */
    async getValidateRule(params: any = {}) : Promise<any>{
        this.validateDataType(params);
        this.validateNotEmptyField(params);
        
        const field = params.rule.field;
        
        return this.validateRule(field);
    }
    

}