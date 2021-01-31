import { IsInt, IsNotEmpty, IsString } from "class-validator/decorator/decorators";
import { IsNull } from "typeorm";

export class RulesDto {

    @IsString({ message: 'field must be a string' })
    @IsNotEmpty({ message: 'field cannot be empty'} )
    readonly field: string;

    @IsString({ message: 'condition must be an string' })
    @IsNotEmpty({ message: 'condition cannot be empty'} )
    readonly condition: string;
    
    @IsInt({ message: 'condition_value must be an intiger' })
    @IsNotEmpty({ message: 'condition_value cannot be empty' })
    readonly condition_value: number;
}