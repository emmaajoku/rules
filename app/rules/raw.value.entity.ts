import { Rules } from './rules.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class RawValues {
    @PrimaryColumn()
    value_id: number;

    @Column({type: 'varchar', length: 55, nullable: true})
    raw_payload: string;

    @Column({type: 'varchar', length: 10, nullable: true})
    condition: string;

    @ManyToOne(() => Rules)
    @JoinColumn({name : 'rule_id'})
    // tslint:disable-next-line: variable-name
    rule_id: Rules;

}

