import { BadRequestException } from '@nestjs/common';

interface IDoesntMatchException {
  onValue: string;
  onConfirmValue: string;
  doesntMatches: string;
}

export default async function DoesntMatchException({
  onValue,
  onConfirmValue,
  doesntMatches,
}: IDoesntMatchException) {
  if (onValue !== onConfirmValue) {
    throw new BadRequestException({
      message: `${doesntMatches} doesn't match.`,
    });
  }
}
