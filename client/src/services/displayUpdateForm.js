
import UpdateRequest from '../components/UpdateRequest.jsx';
import store from '../../redux/store';
import actions from '../../redux/actions';


const displayUpdateForm = (event) => {
  let requestId = event.target.id;
  const requestIdArray = requestId.split('-');
  requestId = parseInt(requestIdArray[1], 10);
  const { requests } = store.getState().requestReducer;
  const requestToUpdate = requests.filter(request => request.request.id === requestId);
  store.dispatch(actions.setRequestToUpdate(requestToUpdate[0]));
  store.dispatch(actions.setTabToView(UpdateRequest));
}

export default displayUpdateForm;
