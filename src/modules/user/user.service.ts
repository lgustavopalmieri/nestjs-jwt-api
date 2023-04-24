import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';

import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import AlreadyExistsException from '../../exceptions/already-exists.exception';
import DoesntMatchException from '../../exceptions/doesnt-match.exception';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async register(createUserDto: CreateUserDto) {
    await AlreadyExistsException({
      result: await this.userRepo.find({
        where: [
          {
            first_name: createUserDto.first_name,
          },
          { email: createUserDto.email },
        ],
      }),
      entity: 'User',
    });

    await DoesntMatchException({
      onValue: createUserDto.password,
      onConfirmValue: createUserDto.password_confirm,
      doesntMatches: 'Passwords',
    });

    const hash = await bcrypt.hash(createUserDto.password, 12);

    const newUser = this.userRepo.create({
      ...createUserDto,
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return await this.userRepo.save(newUser);
  }
}
