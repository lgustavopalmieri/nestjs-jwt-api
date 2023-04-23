import { BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';

interface IAlreadyExistsException {
  entity: string;
  repository: Repository<any>;
  dto: object;
}

// export default class AlreadyExistsException extends BadRequestException {
//   constructor({ entity }: IAlreadyExistsException) {
//     super({
//       message: `This ${entity} already exists.`,
//     });
//   }
// }

export default class AlreadyExistsException {
  entity = '';
  repository: Repository<any> = null;
  dto = {};

  constructor({ entity, repository, dto }: IAlreadyExistsException) {
    this.checkExists({
      entity: entity,
      repository: repository,
      dto: dto,
    });
  }

  async checkExists({ entity, repository, dto }: IAlreadyExistsException) {
    const entityExists = await this.repository.find({
      where: [dto],
    });
  }
}
