import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { user, users } from './mocks/users.mock';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  const mockService = {
    register: jest.fn(),
    save: jest.fn(),
    find: jest.fn().mockResolvedValueOnce(users),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockService,
        },
      ],
    }).compile();

    const app = module.createNestApplication();
    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});
