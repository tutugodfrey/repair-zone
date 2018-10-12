import signinHandler from '../../client/src/services/signinHandler';
import store from '../../client/redux/store';
import actions from '../../client/redux/actions';

jest.mock('../../client/src/services/fetchRequest');
describe('signHandler test', () => {
  const event = {
    preventDefault: jest.fn(),
  }
  test('should not submit form if signinDetail has not been filled out', () => {
    signinHandler(event);
    const { errorMessage } = store.getState().pageReducer;
    const { signinDetail } = store.getState().formDetailReducer;
    expect(signinDetail).toEqual(undefined);
    expect(errorMessage).toBe('please enter your username and password');
  });
  test('should not submit form if signinDetail has not been filled out', () => {
    const signinDetai = {
      password: 'aa',
      username: 'aa',
    }
    store.dispatch(actions.saveSigninDetails(signinDetai))
    signinHandler(event);
    const { errorMessage } = store.getState().pageReducer
    expect(errorMessage).toBe('please enter your username and password');
  });

  test('should not submit form if signinDetail has not been filled out', async () => {
    const signinData = {
      password: '123456',
      username: 'regularuser'
    }
    store.dispatch(actions.saveSigninDetails(signinData))
    await signinHandler(event);
    const { userData } = store.getState().userReducer;
    expect(userData.isAdmin).toBe(false);
  });

  test('should not submit form if signinDetail has not been filled out', async () =>  {
    const signinData = {
      password: '123456',
      username: 'adminuser'
    }
    store.dispatch(actions.saveSigninDetails(signinData))
    await signinHandler(event);
    const { userData } = store.getState().userReducer;
    expect(userData.isAdmin).toEqual(true);
  });

  test('should not submit form if signinDetail has not been filled out', async () =>  {
    const signinData = {
      password: '123456',
      username: 'non-exist'
    }
    store.dispatch(actions.saveSigninDetails(signinData))
    await signinHandler(event);
    const { userData } = store.getState().userReducer;
    expect(userData.isAdmin).toEqual(true);
  });
});
