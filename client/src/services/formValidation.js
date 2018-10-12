import store from '../../redux/store';
import actions from '../../redux/actions';

const validateSigninForm = (event) => {
  const { name, value, className } = event.target;
  const spanElement = event.target.nextSibling;
  const valueLength = value.trim().length;
  const emailRegExp = /\w+@\w+\.(com|org|net|co)/i;
  if (valueLength > 0 && valueLength < 4) {
    spanElement.innerHTML = `length of ${name} should be greater than 4`;
    const eleClass = className.replace('field-valid', 'bg-danger');
    event.target.className = eleClass;
    store.dispatch(actions.confirmFormValidation(false));
  } else if (name === 'password' && (valueLength > 0 && valueLength < 6)) {
    spanElement.innerHTML = `length of ${name} should be at least than 6`;
    const eleClass = className.replace('field-valid', 'bg-danger');
    event.target.className = eleClass;
    store.dispatch(actions.confirmFormValidation(false));
  } else if (name === 'email' && !emailRegExp.test(value) && valueLength > 0) {
    spanElement.innerHTML = `Please enter a valid email in email field`;
    const eleClass = className.replace('field-valid', 'bg-danger');
    event.target.className = eleClass;
  } else {
    spanElement.innerHTML = ''; 
    const eleClass = className.replace('bg-danger', 'field-valid');
    event.target.className = eleClass;
    store.dispatch(actions.confirmFormValidation(true));
  }
}

const validateRequestForm = (event) => {
  const { name, value, className } = event.target;
  const spanElement = event.target.nextSibling;
  const valueLength = value.trim().length;
  if (valueLength > 0 && valueLength < 4) {
    spanElement.innerHTML = `length of ${name} should be greater than 4`;
    const eleClass = className.replace('field-valid', 'bg-danger');
    event.target.className = eleClass;
    store.dispatch(actions.confirmFormValidation(false));
  } else {
    spanElement.innerHTML = ''; 
    const eleClass = className.replace('bg-danger', 'field-valid');
    event.target.className = eleClass;
    store.dispatch(actions.confirmFormValidation(true));
  }
}

const validateRequiredField = (event) => {
  const { name, value, className } = event.target;
  const spanElement = event.target.nextSibling;
  if (className.indexOf('required') >= 0 && value.length < 1) {
    spanElement.innerHTML = `${name} is required`;
    const eleClass = className.replace('field-valid', 'bg-danger');
    event.target.className = eleClass;
    store.dispatch(actions.confirmFormValidation(false));
  } else if (className.indexOf('required') >= 0 && (value === '0' || value === 'Select')) {
    spanElement.innerHTML = `${name} is required`;
    const eleClass = className.replace('field-valid', 'bg-danger');
    event.target.className = eleClass;
    store.dispatch(actions.confirmFormValidation(false));
  } else {
    spanElement.innerHTML = ''; 
    const eleClass = className.replace('bg-danger', 'field-valid');
    event.target.className = eleClass;
    store.dispatch(actions.confirmFormValidation(true));
  }
  return event;
}

const onFocusHandler = (event) => {
  const { name, value, className } = event.target;
  const spanElement = event.target.nextSibling;
  spanElement.innerHTML = ''; 
  const eleClass = className.replace('bg-danger', 'field-valid');
  event.target.className = eleClass;
  store.dispatch(actions.confirmFormValidation(true));
}

export {
  validateSigninForm,
  validateRequiredField,
  onFocusHandler,
  validateRequestForm,
}
