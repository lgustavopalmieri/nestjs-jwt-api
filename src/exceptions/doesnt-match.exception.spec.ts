import DoesntMatchException from './doesnt-match.exception';

describe('DoesntMatchException', () => {
  it('should not throw DoesntMatchException', async () => {
    const validate = await DoesntMatchException({
      onValue: 'passwords match',
      onConfirmValue: 'passwords match',
      doesntMatches: 'Passwords',
    });

    expect(validate).resolves;
  });

  it('should throw DoesntMatchException', async () => {
    const validate = DoesntMatchException({
      onValue: 'passwords will not match',
      onConfirmValue: 'passwords doesnt matches',
      doesntMatches: 'Passwords',
    });

    expect(validate).rejects.toThrow("Passwords doesn't match.");
  });
});
