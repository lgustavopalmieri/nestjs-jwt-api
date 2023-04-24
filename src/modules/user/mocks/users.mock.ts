export const user = {
  first_name: 'User New',
  last_name: 'Of Api',
  email: 'user-threeNew@mail.com',
  password: 'fs%$9#g5*ld@99482',
  password_confirm: 'fs%$9#g5*ld@99482',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const users = [
  {
    id: 1,
    first_name: 'User New',
    last_name: 'Of Api',
    email: 'user-threeNew@mail.com',
    password: 'fs%$9#g5*ld@99482',
    password_confirm: 'fs%$9#g5*ld@99482',
    createdAt: expect.anything(),
    updatedAt: expect.anything(),
  },
  {
    id: 2,
    first_name: 'User Newtwo',
    last_name: 'Of Api',
    email: 'user-threeNewtwo@mail.com',
    password: 'fs%$9#g5*ld@99482',
    password_confirm: 'fs%$9#g5*ld@99482',
    createdAt: expect.anything(),
    updatedAt: expect.anything(),
  },
];
export const mockRepository = {
  register: jest.fn(),
  save: jest.fn(),
  find: jest.fn(() => users),
  create: jest.fn(),
};
