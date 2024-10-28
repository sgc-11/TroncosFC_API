import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Sponsor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    logoUrl: string;
    @Column()
    websiteUrl: number;
}