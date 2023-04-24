import AlreadyExistsException from './already-exists.exception';

const results = [
  {
    first_name: 'User Three',
    last_name: 'Of Api',
    email: 'user-three@mail.com',
    password: 'string',
    password_confirm: 'string',
  },
  {
    first_name: 'User Four',
    last_name: 'Of Api',
    email: 'user-four@mail.com',
    password: 'string',
    password_confirm: 'string',
  },
];

describe('AlreadyExistsException', () => {
  it('should not throw an exception', async () => {
    const testFirstName = await AlreadyExistsException({
      result: results.filter((result) => result.first_name === 'User Five'),
      entity: 'User',
    });

    const testEmail = await AlreadyExistsException({
      result: results.filter((result) => result.email === 'user-five@mail.com'),
      entity: 'User',
    });

    expect(testFirstName).resolves;
    expect(testEmail).resolves;
  });

  it('should rejects AlreadyExistsException', () => {
    const test = AlreadyExistsException({
      result: results.filter((result) => result.first_name === 'User Three'),
      entity: 'User',
    });

    const testEmail = AlreadyExistsException({
      result: results.filter(
        (result) => result.email === 'user-three@mail.com',
      ),
      entity: 'User',
    });

    expect(test).rejects.toThrow('This User already exists.');
    expect(testEmail).rejects.toThrow('This User already exists.');
  });
});
