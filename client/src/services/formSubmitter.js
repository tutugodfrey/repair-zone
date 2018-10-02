import store from '../../redux/store';

const submitForm = (event) => {
  event.preventDefault();
  const signupDetail = store.getState().signupDetail;
};

export default submitForm;
