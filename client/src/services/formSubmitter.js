import actions from '../../redux/actions';
import store from '../../redux/store';

const submitForm = (event) => {
  event.preventDefault();
  const signupDetail = store.getState().signupDetail;
  console.log(signupDetail);
};

export default submitForm;