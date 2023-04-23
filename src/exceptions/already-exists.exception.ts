import { BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';

interface IAlreadyExistsException {
  entity: string;
}

export default class AlreadyExistsException extends BadRequestException {
  constructor({ entity }: IAlreadyExistsException) {
    super({
      message: `This ${entity} already exists.`,
    });
  }
}
