import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('modules')
export class ModuleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}