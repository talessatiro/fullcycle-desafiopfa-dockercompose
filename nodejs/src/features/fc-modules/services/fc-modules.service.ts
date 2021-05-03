import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MODULE_REPOSITORY } from '../../../configuration/constants';
import { ModuleDTO } from '../dtos/module.dto';
import { ModuleEntity } from '../entities/module.entity';

@Injectable()
export class FcModulesService {

    constructor(
        @Inject(MODULE_REPOSITORY)
        private readonly modulesRepository: Repository<ModuleEntity>) { }

    async list(): Promise<ModuleDTO[]> {
        const modulesDTO: ModuleDTO[] = [];
        const modules = await this.modulesRepository.find();

        if (modules) {
            modules.forEach((module: ModuleEntity) => {
                modulesDTO.push(new ModuleDTO(module.name));
            });
        }

        return modulesDTO;
    }
}
