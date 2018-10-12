import displayUserDashboard from '../../client/src/services/displayUserDashboard';
import store from '../../client/redux/store';
import actions from '../../client/redux/actions';

jest.mock('../../client/src/services/fetchRequest');
describe('displayUserDashboard test', () => {
  describe('user dashboard', () => {
    beforeEach(() => {
      let userData = {
        isAdmin: false,
        token: 'token variable',
      };
      userData = JSON.stringify(userData)
      localStorage.setItem('userData', userData);
    });
    test('should load the admin dashboard', async () => {
      await displayUserDashboard();
      const { userData, TabContent } = store.getState()
      let user = localStorage.getItem('userData');
      user = JSON.parse(user)
      expect(user.isAdmin).toBe(false);
    });
  describe('user dashboard', () => {
    beforeEach(() => {
      let userData = {
        isAdmin: false,
        token: 'invalid token',
      };
      userData = JSON.stringify(userData)
      localStorage.setItem('userData', userData);
    });
    test('should load the admin dashboard', async () => {
      await displayUserDashboard();
      let user = localStorage.getItem('userData');
      expect(user).toBe(undefined);
    })
  });

  describe('admin dashboard', () => {
    beforeEach(() => {
      let userData = {
        isAdmin: true,
        token: 'token variable',
      };
      userData = JSON.stringify(userData)
      localStorage.setItem('userData', userData);
    });
    test('should load the admin dashboard', async() => {
      await displayUserDashboard();
      let user = localStorage.getItem('userData');
      user = JSON.parse(user)
      expect(user.isAdmin).toBe(true);
    });
  });
});

  describe('admin dashboard', () => {
    beforeEach(() => {
    let userData = {
      isAdmin: true,
      token: 'invalid token',
    };
    userData = JSON.stringify(userData)
    localStorage.setItem('userData', userData);
  });
    test('should load the admin dashboard', async() => {
      await displayUserDashboard();
      let user = localStorage.getItem('userData');
      expect(user).toBe(undefined);
    });
  });
});
