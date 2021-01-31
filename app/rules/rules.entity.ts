import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Rules {
    @PrimaryColumn()
    rule_id: number;

    @Column({type: 'varchar', length: 55, nullable: true})
    field: string;

    @Column({type: 'varchar', length: 10, nullable: true})
    condition: string;

    @Column({type: 'int', nullable: true})
    condition_value: number;
}
