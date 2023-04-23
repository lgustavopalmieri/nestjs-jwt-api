import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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

    const newUser = this.userRepo.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 12),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return await this.userRepo.save(newUser);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
