import React, { Component } from 'react';
import store from '../../redux/store';
import actions from '../../redux/actions';
import Button from './elementComponents/Button.jsx';
import {
  FormSelect, FormInput, TextArea, CheckBox,
} from './elementComponents/formControls.jsx';
import Div from './elementComponents/Div.jsx';
import Form from './elementComponents/Form.jsx';
import dataFieldCollector from '../services/dataFieldCollector';
import makeRequestHandler from '../services/makeRequestHandler';
import { getServiceProviders } from '../services/getServiceProviders';
import fetchRequest from '../services/fetchRequest';

export default class RequestForm extends Component {
  constructor() {
    super();
    this.state = {
      categories: ['Select', 'Electrical', 'authomobile', 'painting', 'capentary', 'electronics'],
      serviceProviders: [],
    }
  }

  componentDidMount() {
    store.dispatch(actions.setFormToFill('request-form'));
    const options = {
      method: 'get',
    }
    fetchRequest('/auth/services', options, getServiceProviders);
  }
  getServiceProviders(data){
    store.dispatch(actions.saveServiceProviders(data));
  }

  componentWillUpdate() {
    const { serviceProviders } = store.getState();
    // return serviceProviders;
    this.state.serviceProviders = serviceProviders;
  }

  formContent() {
    let services;

    if(!this.state.serviceProviders) {
      services = '';
    } else
    if(this.state.serviceProviders.length > 0) {
      services =
      <FormSelect
        divClass=""
        divId="service-div"
        labelValue="Service Providers"
        inputId='admin'
        inputClass="form-control border-success"
        inputName="adminId"
        options={this.state.serviceProviders}
        onChange={dataFieldCollector.bind(this)}
      />
    }
    return (
      <div className="card">
        <div className="card-body">
        <h3 className="card-title text-center">Make Repair Request</h3>
          {services}
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
            onChange={dataFieldCollector.bind(this)}
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
            onChange={dataFieldCollector.bind(this)}
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
            buttonId='' 
            buttonName='Submit your Request'
            onClick={makeRequestHandler.bind(this)}
          />
        </div>
      </div>
    );

    
  }
  render() {
    return (
      <Div
      divClass="row"
      divId=""
      content={
      <Div
        divClass="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 py-5 my-3"
        divId=""
        content={<Form formId="" formClass="" content={this.formContent()}/>}
      />}
      />
    );
  }
}