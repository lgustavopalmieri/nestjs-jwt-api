import { BadRequestException } from '@nestjs/common';

interface IAlreadyExistsException<T> {
  result: T[];
  entity: string;
}

export default async function AlreadyExistsException({
  result,
  entity,
}: IAlreadyExistsException<typeof result>) {
  const exists = result;

  if (exists?.length) {
    throw new BadRequestException({
      message: `This ${entity} already exists.`,
    });
  }

  return exists;
}
