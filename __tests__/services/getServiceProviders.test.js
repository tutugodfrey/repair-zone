import { updateServiceProviders } from '../../client/src/services/getServiceProviders';
import store from '../../client/redux/store';

describe('getServiceProviders', () => {
  test('should update service provider array with default case', () => {

    const serviceProviderArray = [{}, {}, {}]
    updateServiceProviders(serviceProviderArray);
    const { serviceProviders } = store.getState().requestReducer;
    expect(serviceProviders.length).toBe(4);
    expect(serviceProviders[0].serviceName).toBe('Select');
    expect(serviceProviders[0].id).toBe(0);
    expect(serviceProviders[0].phone).toBe('11111111111');
  });
});
