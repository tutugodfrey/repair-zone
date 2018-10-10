import signupHandler from '../../client/src/services/signupHandler';
import store from '../../client/redux/store';
import actions from '../../client/redux/actions';

jest.mock('../../client/src/services/fetchRequest');
describe('siupHandler test', () => {
  const event = {
    preventDefault: jest.fn(),
  }
  test('should not submit form if signinDetail has not been filled out', () => {
    signupHandler(event);
    const { signupDetail, errorMessage } = store.getState();
    expect(signupDetail).toEqual(undefined);
    expect(errorMessage).toBe('Please fill out all required field to signup');
  });
  test('should not submit form if signinDetail has not been filled out', () => {
    const signupData = {
      password: '',
      username: '',
      fullname: ''
    }
    store.dispatch(actions.saveSignupDetails(signupData))
    signupHandler(event);
    const { errorMessage } = store.getState();
    expect(errorMessage).toBe('Please fill out all required field to signup');
  });

  test('should not submit form if signinDetail has not been filled out', () => {
    const signupData = {
    fullname: 'fullname',
    username: 'username',
    email: 'username@gmail.com',
    address: 'lagos nigeria',
    password: '123456',
    confirmPassword: '1234567',
    'profile-photo': 'addjdfdjdnfjnjfng',
    phone: '01233485868',
    isAdmin: 'true',
    serviceName: 'aserviceprovider',
    }
    store.dispatch(actions.saveSignupDetails(signupData))
    signupHandler(event);
    const { errorMessage } = store.getState();
    expect(errorMessage).toBe('password you enter does not match');
  });

  test('should submit form if signupDetail are properly enter', async () => {
    const signupData = {
    fullname: 'fullname',
    username: 'username',
    email: 'username@gmail.com',
    address: 'lagos nigeria',
    password: '123456',
    confirmPassword: '123456',
    'profile-photo': 'addjdfdjdnfjnjfng',
    phone: '01233485868',
    isAdmin: 'true',
    serviceName: 'aserviceprovider',
    }

    store.dispatch(actions.saveSignupDetails(signupData))
    await signupHandler(event);
    const { userData } = store.getState();
    expect(userData.token).toBe('tokenvalue');
    expect(userData.isAdmin).toBe(true);
  });

  test('should submit form if signupDetail are properly enter', async () => {
     const signupData = {
     fullname: 'fullname',
     username: 'username',
     email: 'username@gmail.com',
     address: 'lagos nigeria',
     password: '123456',
     confirmPassword: '123456',
     phone: '01233485868',
     }
 
     store.dispatch(actions.saveSignupDetails(signupData))
     await signupHandler(event);
     const { userData } = store.getState();
     expect(userData.token).toBe('tokenvalue');
     expect(userData.isAdmin).toBe(true);
   });

   test('should not submit form if user fill is admin and no serviceName', () => {
     const signupData = {
     fullname: 'fullname',
     username: 'username',
     email: 'username@gmail.com',
     address: 'lagos nigeria',
     password: '123456',
     confirmPassword: '123456',
     phone: '01233485868',
     isAdmin: 'true',
     }
 
     store.dispatch(actions.saveSignupDetails(signupData))
     signupHandler(event);
     const { errorMessage } = store.getState();
     expect(errorMessage).toBe(undefined);
   });
});
