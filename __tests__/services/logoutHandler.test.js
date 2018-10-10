import logoutHandler from '../../client/src/services/logoutHandler';

describe('logoutHandler test', () => {
  test('should clear userData from localStorage', () => {
    const userData = {
      token: 'token variable'
    }
    localStorage.setItem('userData', userData)
    logoutHandler()
    const result = localStorage.getItem('userData')
    expect(result).toEqual(undefined);
  });
});
