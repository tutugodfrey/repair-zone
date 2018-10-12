import displayUpdateForm from '../../client/src/services/displayUpdateForm';
import store from '../../client/redux/store';
import actions from '../../client/redux/actions';

describe('displayUpdateForm', () => {
  const event = {
    preventDefault: jest.fn(),
    target: {
      name: 'name',
      value: 'value',
      type: 'text',
      id: 'request-1'
    }
  }
  const requests = [
    {
      user: {},
      request: {
        id: 1,
      },
    }
  ];

  test('should render the update request page', () => {
    store.dispatch(actions.saveRequests(requests))
    displayUpdateForm(event);
    const result = store.getState().requestReducer.requestToUpdate;
    expect(result).toEqual(requests[0]);
  });
});