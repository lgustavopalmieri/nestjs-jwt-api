import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { mockRepository, user, users } from './mocks/users.mock';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    const app = module.createNestApplication();
    service = module.get<UserService>(UserService);
    await app.init();
  });

  beforeEach(() => {
    mockRepository.register.mockReset();
    mockRepository.save.mockReset();
    mockRepository.find.mockReset();
    mockRepository.create.mockReset();
  });

  it('should register a new user', async () => {
    jest.spyOn(bcrypt, 'hash').mockResolvedValueOnce('testHash');
    mockRepository.save.mockReturnValue(user);
    mockRepository.create.mockReturnValue(user);

    const newUser = await service.register(user);

    expect(bcrypt.hash).toHaveBeenCalled();
    expect(newUser).toEqual({
      ...user,
    });
  });

  it('should throw doesntMatchException', async () => {
    mockRepository.save.mockReturnValue(user);
    mockRepository.create.mockReturnValue(user);

    const newUser = service.register({
      ...user,
      password_confirm: 'wrong_password',
    });

    expect(newUser).rejects.toThrow("Passwords doesn't match.");
  });
});
