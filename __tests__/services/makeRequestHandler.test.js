import makeRequestHandler from '../../client/src/services/makeRequestHandler';
import store from '../../client/redux/store';
import actions from '../../client/redux/actions';

const userData = {
  token: 'token variable',
  id: 3,
};

const requestDetail = {
  category: 'category',
  description: 'description of request',
  address: 'address',
  urgent: 'true',
  adminId: '4',
}

const event = {
  preventDefault: jest.fn(),
  target: {},
}
jest.mock('../../client/src/services/fetchRequest');
describe('makeRequestHandler test', () => {
  test('should not process the request if request detail is not filled out', () => {
    makeRequestHandler(event);
    const { errorMessage } = store.getState();
    expect(errorMessage).toBe('please fill all required fields to make your request')
  });

  test('should not process if default user does not select a service provider', () => {
    requestDetail.adminId = '0';
    store.dispatch(actions.saveRequestDetails(requestDetail));
    makeRequestHandler(event);
    const { errorMessage, requestDetail: requestDetails } = store.getState();
    expect(errorMessage).toBe('please select a service');
  });

  test('should not process if user select default category "Select"', () => {
    requestDetail.category = 'Select';
    store.dispatch(actions.saveRequestDetails(requestDetail));
    makeRequestHandler(event);
    const { errorMessage } = store.getState();
    expect(errorMessage).toBe(errorMessage);
  });

  test('should not process if some request fields are not field out', () => {
    requestDetail.description = undefined;
    requestDetail.category = 'category';
    store.dispatch(actions.saveRequestDetails(requestDetail));
    makeRequestHandler(event);
    const { errorMessage, requestDetail: requestDetails } = store.getState();
    expect(errorMessage).toBe('Please fill all required fields');
  });

  test('should process when all fields are field out', async () => {
    requestDetail.adminId = '4';
    requestDetail.category = 'category';
    requestDetail.description = 'description';
    store.dispatch(actions.saveRequestDetails(requestDetail));
    store.dispatch(actions.setUserData(userData));
    await makeRequestHandler(event);
    const { requests } = store.getState();
    expect(requests.length).toBe(1);
  });

  test('should process the request if request urgent field is not checked', async () => {
    requestDetail.urgent = '';
    store.dispatch(actions.saveRequestDetails(requestDetail));
    await makeRequestHandler(event);
    const { requests } = store.getState();
    expect(requests.length).toBe(2);
  });

  test('should return an error message if service provider does not exist', async () => {
    requestDetail.adminId = '5';
    store.dispatch(actions.saveRequestDetails(requestDetail));
    store.dispatch(actions.setUserData(userData));
    await makeRequestHandler(event);
    const {errorMessage, requests } = store.getState();
    expect(errorMessage).toBe('The service provider does not exist');
    expect(requests.length).toBe(2);
  });
});

