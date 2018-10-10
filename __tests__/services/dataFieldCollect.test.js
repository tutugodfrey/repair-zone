import dataFieldCollector from '../../client/src/services/dataFieldCollector';
import store from '../../client/redux/store';
import actions from '../../client/redux/actions';

describe('dataFieldCollector test', () => {
  const event = {
    preventDefault: jest.fn(),
    target: {
      name: 'name',
      value: 'value',
      type: 'text',
    }
  }

  describe('sign', () => {
    beforeEach(() => {
      store.dispatch(actions.setFormToFill('signin'));
    })
    test('should add user detail to redux store', () => {
      dataFieldCollector(event)
      const result = store.getState().signinDetail;
      expect(result.name).toBe('value')
    });
    test('should update user detail as user continue to type', () => {
      const signinDetail = {
        username: 'username',
      }
      store.dispatch(actions.saveSigninDetails(signinDetail));
      dataFieldCollector(event)
      const result = store.getState().signinDetail;
      expect(result.name).toBe('value')
    });
  });

  describe('signup case', () => {
    beforeEach(() => {
      store.dispatch(actions.setFormToFill('signup'));
    })
    test('should add user detail to redux store', () => {
      dataFieldCollector(event)
      const result = store.getState().signupDetail;
      expect(result.name).toBe('value')
    });
    test('should update user detail as user continue to type', () => {
      const signupDetail = {
        username: 'username',
      }
      store.dispatch(actions.saveSignupDetails(signupDetail));
      const files = ['value']
      event.target.type = 'file';
      event.target.files = files;
      dataFieldCollector(event)
      const result = store.getState().signupDetail;
      expect(result.name).toBe('value');
      event.target.type = 'text';
    });
  });

  describe('make request', () => {
    beforeEach(() => {
      store.dispatch(actions.setFormToFill('request-form'));
    });
    test('should save request detail as user type', () => {
      event.target.type = 'text';
      dataFieldCollector(event)
      const result = store.getState().requestDetail;
      expect(result.name).toBe('value')
    });

    test('should update request detail as user continue typing', () => {
      const requestDetail = {
        category: 'category',
      }
      store.dispatch(actions.saveRequestDetails(requestDetail));
      event.target.type = 'checkbox';
      event.target.checked = true;
      dataFieldCollector(event)
      const result = store.getState().requestDetail;
      expect(result.name).toBe('true');
    });
  });

  describe('update request', () => {
    beforeEach(() => {
      store.dispatch(actions.setFormToFill('update-request-form'));
    })
    test('should save request detail when user type in value', () => {
      event.target.type = 'text';
      store.getState().requestDetail = undefined;
      dataFieldCollector(event)
      const result = store.getState().requestDetail;
      expect(result.name).toBe('value')
    });
    test('should add request detail to redux store', () => {
      const requestDetail = {
        category: 'category',
      }
      event.target.type = 'text';
      store.dispatch(actions.saveRequestDetails(requestDetail));
      dataFieldCollector(event)
      const result = store.getState().requestDetail;
      expect(result.name).toBe('value')
    });
  });

  describe('default action', () => {
    test('default action with an evnet', () => {
      store.dispatch(actions.setFormToFill(''));
      const result = dataFieldCollector(event);
      expect(result).toBe('No form is set for submit')

    })
  })
});
