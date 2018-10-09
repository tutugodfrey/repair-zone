import store from '../../client/redux/store';
import actions from '../../client/redux/actions';
import { 
  validateSigninForm,
  validateRequiredField,
  onFocusHandler,
  validateRequestForm,
}from '../../client/src/services/formValidation';

describe('formValidation test', () => {

  describe('validateSigninForm', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'name',
        value: 'val',
        type: 'text',
        className: 'field-valid',
        nextSibling: {},
      }
    }
    test('should flag error if user field length is > 1 < 4', () => {
      validateSigninForm(event);
      const errorStatus = store.getState().formValidated;
      expect(errorStatus).toBe(false)
    });

    test('should flag error if password field length is > 1 < 6', () => {
      event.target.name = 'password';
      validateSigninForm(event);
      const errorStatus = store.getState().formValidated;
      expect(errorStatus).toBe(false)
    });

    test('should flag error if password field length is > 1 < 6', () => {
      event.target.name = 'email';
      event.target.value = 'somebody.com'
      validateSigninForm(event);
      // const errorStatus = store.getState().formValidated;
      const nextSibling = event.target.nextSibling.innerHTML
      expect(nextSibling).toBe('Please enter a valid email in email field')
    });

    test('should flag error if password field length is > 1 < 6', () => {
      event.target.name = 'name';
      event.target.value = 'value'
      validateSigninForm(event);
      const errorStatus = store.getState().formValidated;
      expect(errorStatus).toBe(true)
    });

    test('should flag error if password field length is > 1 < 6', () => {
      event.target.name = 'password';
      event.target.value = 'value'
      validateSigninForm(event);
      const errorStatus = store.getState().formValidated;
      expect(errorStatus).toBe(false)
    });
  });

  describe('validateRequiredField', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'name',
        value: 'val',
        type: 'text',
        className: 'field-valid required',
        nextSibling: {},
      }
    }
    test('should flag error if user field length is > 1 < 4', () => {
      event.target.value = ''
      validateRequiredField(event);
      const errorStatus = store.getState().formValidated;
      expect(errorStatus).toBe(false)
    });

    test('should flag error if user select default "Select"', () => {
      event.target.value = 'Select'
      validateRequiredField(event);
      const errorStatus = store.getState().formValidated;
      expect(errorStatus).toBe(false)
    });

    test('should pass when require field is field out', () => {
      event.target.value = 'automobile'
      validateRequiredField(event);
      const errorStatus = store.getState().formValidated;
      expect(errorStatus).toBe(true)
    });
  });

  describe('onFocusHandler', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'name',
        value: 'val',
        type: 'text',
        className: 'bg-danger',
        nextSibling: {},
      }
    }
    test('should flag error if user field length is > 1 < 4', () => {
      onFocusHandler(event);
      const errorStatus = store.getState().formValidated;
      expect(errorStatus).toBe(true)
    });
  });

  describe('validateRequestForm', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'name',
        value: 'val',
        type: 'text',
        className: 'field-valid',
        nextSibling: {},
      }
    }
    test('should flag error if user field length is > 1 < 4', () => {
      validateRequestForm(event);
      const errorStatus = store.getState().formValidated;
      expect(errorStatus).toBe(false)
    });
    test('should flag error if user field length is > 1 < 4', () => {
      event.target.value = 'value'
      validateRequestForm(event);
      const errorStatus = store.getState().formValidated;
      expect(errorStatus).toBe(true)
    });
  });
});
