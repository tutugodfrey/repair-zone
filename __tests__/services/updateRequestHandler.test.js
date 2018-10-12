import updateRequestHandler from '../../client/src/services/updateRequestHandler';
import store from '../../client/redux/store';
import actions from '../../client/redux/actions';

jest.mock('../../client/src/services/fetchRequest');
const userData = {
  token: 'token variable',
  id: 3,
};
const updateDetail = {
  category: 'new category',
  description: 'new description of request',
}
const request = {
  id: 1,
  category: 'category',
  description: 'description of request',
  address: 'address',
  urgent: 'true',
  adminId: '4',
  status: 'awaiting confirmation',
}
const requests = [
  {
    user: {},
    request,
  },
];
const event = {
  preventDefault: jest.fn(),
  target: {
    id: 'request-1',
    innerHTML: 'Reject'
  }
}
describe('updateRequestHandler test', () => {
  beforeEach(() => {
    store.dispatch(actions.saveRequests(requests));
    store.dispatch(actions.setUserData(userData));
  })
  describe('admin', () => {
    test('should disapprove a request with given id', async () => {
      await updateRequestHandler(event);
      const request = store.getState().requestReducer.requests[0];
      expect(request.request.status).toBe('rejected');
    });
    test('should approve a request with given id', async () => {
      event.target.innerHTML = 'Approve';
      await updateRequestHandler(event);
      const request = store.getState().requestReducer.requests[0];
      expect(request.request.status).toBe('pending');
    });
    test('should approve a request with given id', async () => {
      event.target.innerHTML = 'Resolve';
      await updateRequestHandler(event);
      const request = store.getState().requestReducer.requests[0];
      expect(request.request.status).toBe('resolved');
    });
  });

  describe('user', () => {
    test('should update a request with given id', async () => {
      store.dispatch(actions.saveRequestDetails(updateDetail));
      event.target.innerHTML = 'Save Update';
      await updateRequestHandler(event);
      const request = store.getState().requestReducer.requests[0];
      expect(request.request.category).toBe('new category');
      expect(request.request.description).toBe('new description of request');
    });
    test('should return an error mesage if something went work', async () => {
      store.dispatch(actions.saveRequestDetails(updateDetail));
      event.target.id = 'request-2'
      event.target.innerHTML = 'Save Update';
      await updateRequestHandler(event);
      const request = store.getState().requestReducer.requests[0];
      expect(request.request.category).toBe('new category');
      expect(request.request.description).toBe('new description of request');
    });
    test('should delete a request with given id', async () => {
      event.target.innerHTML = 'Delete';
      event.target.id = 'request-1';
      await updateRequestHandler(event);
      const { reducedRequests } = store.getState().requestReducer;
      const { errorMessage } = store.getState().pageReducer;
      expect(reducedRequests.length).toBe(0);
      expect(errorMessage).toBe('request has been deleted')
    });
    test('should return null if request is set for update', async () => {
      event.target.innerHTML = '';
      const result = await updateRequestHandler(event);
      expect(result).toEqual(null)
    });
  });
});
