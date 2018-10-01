import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import Button from './elementComponents/Button.jsx';
import Modal from './Modal.jsx'
import {
  FormSelect, FormInput, TextArea, CheckBox,
} from './elementComponents/formControls.jsx';
import Div from './elementComponents/Div.jsx';
import Form from './elementComponents/Form.jsx';
import dataFieldCollector from '../services/dataFieldCollector';
import updateRequestHandler from '../services/updateRequestHandler';
import { updateServiceProviders } from '../services/getServiceProviders';
import fetchRequest from '../services/fetchRequest';

/**
 * render update request page
 */
class UpdateRequest extends Component {
  state = {
    categories: ['Select', 'Electrical', 'authomobile', 'painting', 'capentary', 'electronics'],
    serviceProviders: [],
    request: {},
  }
  componentDidMount = async () => {
    this.props.dispatch(actions.setFormToFill('update-request-form'));
    const options = {
      method: 'get',
    };
    const services = await fetchRequest('/auth/services', options);
    await updateServiceProviders(services);

    const { requestToUpdate } = this.props;
    const { request, user } = requestToUpdate;
    let checked = false;
    if(request.urgent) {
      checked = true;
    };
    const urgentStatus = document.getElementById('urgent');
    urgentStatus.checked = checked;
    this.setState({
      request,
      selectedCategory: request.category,
      selectedService: user.serviceName,
    });
  }

  componentWillUpdate() {
    const { serviceProviders } = this.props;
    this.state.serviceProviders = serviceProviders;
  }
  
  // update the ste component from state value
  handleChange(event) {
    const { name, value } = event.target;
    this.state.request[name] =  value;
    this.setState({
      state: {
        request: {
          name: value,
        }
      }
    })
    dataFieldCollector(event)
  }

  formContent() {
    let services;

    const { serviceProviders } = this.props;
    if(serviceProviders) {
      services =
      <FormSelect
        divClass=""
        divId="service-div"
        labelValue="Service Providers"
        inputId='admin'
        inputClass="form-control border-success"
        inputName="adminId"
        options={serviceProviders}
        onChange={dataFieldCollector.bind(this)}
      />
    }

    return (
      <div className="card">
        <div className="card-body">
        <h3 className="card-title text-center">Make Repair Request</h3>
          {services}
          <p>Your previous selection is <strong>
            {this.state.selectedService}
            </strong>
          </p>
          <FormSelect
            divClass=""
            divId="category-div"
            labelValue="Category"
            inputId='category'
            inputClass="form-control border-success"
            inputName="category"
            options={this.state.categories}
            onChange={dataFieldCollector.bind(this)}
          />
          <p>Your previous selection is <strong>
            {this.state.selectedCategory}
            </strong>
          </p>
          <TextArea
            type="text"
            id="description"
            labelValue="Description"
            divClass="form-group border-success"
            inputClass="form-control border-success"
            cols="60"
            rows="10"
            ref="description"
            name="description"
            placeholder="Describe you requirement here"
            onChange={this.handleChange.bind(this)}
            value={this.state.request.description}
          />
          <br />
          <FormInput
            type="text"
            id="address"
            labelValue="Address"
            divClass="form-group"
            inputClass="form-control border-success"
            ref="address"
            inputName="address"
            placeholder="address"
            value={this.state.request.address}
            onChange={this.handleChange.bind(this)}
          /> 
          <br />
          <CheckBox
            divId="urgency-div"
            divClass="border-success"
            labelId="urgent-label"
            labelId="urgent-label"
            labelValue="Urgent"
            labelClass="ml-3"
            inputId="urgent"
            inputClass="border-success"
            value=""
            inputName="urgent"
            onChange={dataFieldCollector.bind(this)}
          />
          <Button
            buttonClass='ml-1 my-2 px-5 py-2 btn btn-sm bg-success text-center text-white' 
            buttonId={`user-${this.state.request.id}-update`} 
            buttonName='Save Update'
            onClick={updateRequestHandler.bind(this)}
          />
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Modal />
        <Div
          divClass="row"
          divId=""
          content={
          <Div
            divClass="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 py-5 my-3"
            divId=""
            content={<Form formId="" formClass="" content={this.formContent()}/>}
          />
        }
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const {
    requests,
    serviceProviders,
    requestToUpdate,
  } = state;
  return {
    requests,
    serviceProviders,
    requestToUpdate,
  }
}

export default connect(mapStateToProps)(UpdateRequest);
