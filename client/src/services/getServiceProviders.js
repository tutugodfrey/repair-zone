import store from '../../redux/store';
import actions from '../../redux/actions';
export const updateServiceProviders = (serviceProviders) => {
  if(Array.isArray(serviceProviders)) {
    const defaultOption = {
      id:0,
      serviceName: 'Select',
      phone: '11111111111',
    }
    serviceProviders.unshift(defaultOption)
    return store.dispatch(actions.saveServiceProviders(serviceProviders));
  }
}
