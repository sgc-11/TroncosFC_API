import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Media {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    type: string;
    @Column()
    Url: string;
    @Column()
    description: string;
}