import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    type: string;
    @Column()
    price: number;
    @Column()
    imageUrl: string;
    @Column()
    description: string;
    @Column()
    stock: number;
}