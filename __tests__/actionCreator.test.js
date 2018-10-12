import actions from '../client/redux/actions';
import store from '../client/redux/store';

describe('action Creator test', () => {
  const requests = [{
    fullname: 'fullname',
    username: 'username',
    token: 'tokenvariable',
  }];
  test('set user data', () => {
    const userData = {
      fullname: 'fullname',
      username: 'username',
      token: 'tokenvariable',
    }
    const action = store.dispatch(actions.setUserData(userData));
    expect(action.type).toBe('SET_USER_DATA');
    expect(action.value).toEqual(userData);
    expect(store.getState().userReducer.userData).toEqual(userData);
  });

  test('set display page', () => {
    const page = 'a string of html character'
    const action = store.dispatch(actions.displayPage(page));
    expect(action.type).toBe('SET_DISPLAY_PAGE');
    expect(action.value).toEqual(page);
    expect(store.getState().pageReducer.home).toEqual(page);
  });

  test('save signin detail', () => {
    const signinDetails = {};
    const action = store.dispatch(actions.saveSigninDetails(signinDetails));
    expect(action.type).toBe('SAVE_SIGNIN_DETAIL');
    expect(store.getState().formDetailReducer.signinDetail).toEqual(signinDetails);
  });

  test('save signup detail', () => {
    const signupDetails = {};
    const action = store.dispatch(actions.saveSignupDetails(signupDetails));
    expect(action.type).toBe('SAVE_SIGNUP_DETAIL');
    expect(store.getState().formDetailReducer.signupDetail).toEqual(signupDetails);
  });

  test('save request detail', () => {
    const action = store.dispatch(actions.saveRequestDetails({name: 'name'}));
    expect(action.type).toBe('SAVE_REQUEST_DETAIL');
    expect(store.getState().formDetailReducer.requestDetail).toEqual({name: 'name'});
  });

  test('set form to fill', () => {
    const formToFill = 'signin form'
    const action = store.dispatch(actions.setFormToFill(formToFill));
    expect(action.type).toBe('SET_FORM_TO_FILL');
    expect(action.value).toBe('signin form');
    expect(store.getState().formDetailReducer.formType).toBe('signin form');
  });

  test('set tab to view', () => {
    const tabToView = 'string of html character';
    const action = store.dispatch(actions.setTabToView(tabToView));
    expect(action.type).toBe('SET_TAB_TO_VIEW');
    expect(store.getState().pageReducer.TabContent).toEqual(tabToView);
  });

  test('save requests', () => {
    const requests = [{
      fullname: 'fullname',
      username: 'username',
      token: 'tokenvariable',
    }];
    const action = store.dispatch(actions.saveRequests(requests));
    expect(action.type).toBe('SAVE_REQUESTS');
    expect(action.value.length).toBe(1);
  });

  test('set service providers', () => {
    const serviceProvider = [];
    const action = store.dispatch(actions.saveServiceProviders(serviceProvider));
    expect(action.type).toBe('SAVE_SERVICE_PROVIDERS');
    expect(action.value).toEqual(serviceProvider);
  });

  test('set error value', () => {
    const errorValue = 'error string';
    const action = store.dispatch(actions.setErrorValue(errorValue));
    expect(action.type).toBe('SET_ERROR_VALUE');
  });

  test('clear error value', () => {
    const action = store.dispatch(actions.clearErrorValue());
    expect(action.type).toBe('CLEAR_ERROR_VALUE');
  })

  test('set request to update', () => {
    const requestToUpdate = {
      request: {},
      user: {},
    };
    const action = store.dispatch(actions.setRequestToUpdate(requestToUpdate));
    expect(action.type).toBe('SET_REQUEST_TO_UPDATE');
    expect(action.value).toEqual(requestToUpdate);
  });
  test('delete request', () => {
    const action = store.dispatch(actions.deleteRequests(requests));
    expect(action.type).toBe('DELETE_REQUESTS');
    expect(action.value.length).toBe(1);
  });

  test('confirm form validation', () => {
    const action = store.dispatch(actions.confirmFormValidation(true));
    expect(action.type).toBe('CONFIRM_FORM_VALIDATION');
  })
  test('empty reduced requests', () => {
    const action = store.dispatch(actions.emptyReducedRequestArray());
    expect(action.type).toBe('EMPTY_REDUCED_REQUEST_ARRAY');
  });

  test('set id of current tab', () => {
    const idOfActiveTab = 'make-request';
    const action = store.dispatch(actions.setIdOfActiveTab(idOfActiveTab));
    expect(action.type).toBe('SET_ID_OF_ACTIVE_TAB');
    expect(action.value).toBe('make-request');
  });
});
