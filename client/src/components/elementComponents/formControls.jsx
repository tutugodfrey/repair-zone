import React, {Component} from 'react';
import FormOptions from './FormOptions.jsx';

class FormInputWithoutDiv extends Component {
  render() {
      return <input 
    type={this.props.inputType} 
    name={this.props.inputName} 
    id={this.props.inputId}
    value={this.props.value}
    placeholder={this.props.inputPlaceholder} 
    className={this.props.inputClass}
    onChange={this.props.onChange} />
  };
}


 class FormInput extends Component {
  render() {
    let requiredFieldIndicator = '';
    if (this.props.requiredField) {
      requiredFieldIndicator =
        <span className={this.props.spanClass}>*</span>;
    }
    return ( 
      <div id={this.props.divId} className={this.props.divClass}>
        <label htmlFor={this.props.id}>{this.props.labelValue}</label>
        {requiredFieldIndicator}
        <input
          type={this.props.inputType}
          id={this.props.inputId}
          className={this.props.inputClass}
          ref={this.props.referred}
          onChange={this.props.onChange}
          onMouseOut={this.props.onMouseOut}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          onClick={this.props.click}
          name={this.props.inputName}
          placeholder={this.props.placeholder}
          defaultValue={this.props.value}
        />
        <span className={this.props.validationClass}>{this.props.validationText}</span>
      </div>
    )
  }
}

class TextArea extends Component {
  render() {
    let requiredFieldIndicator = '';
    if (this.props.requiredField) {
      requiredFieldIndicator =
        <span className={this.props.spanClass}>*</span>;
    }
    return ( 
      <div className={this.props.divClass}>
        <label htmlFor={this.props.id}>{this.props.labelValue}</label>
        {requiredFieldIndicator} 
        <textarea
          id={this.props.id}
          className={this.props.inputClass}
          cols={this.props.cols}
          rows={this.props.rows}
          ref={this.props.referred}
          onChange={this.props.onChange}
          onMouseOut={this.props.onMouseOut}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value} >
        </textarea>
        <span className={this.props.validationClass}>{this.props.validationText}</span>
      </div>
    )
  }
}

class FormSubmit extends Component {
  render() {
    return ( 
      <div className={this.props.divClass}>
        <label htmlFor={this.props.id}>{this.props.labelValue}</label>  
        <input type ={this.props.type} id={this.props.id} className={this.props.inputClass} onClick={this.props.onClick} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} />
      </div>
    )
  }
 }

class FormSelect extends Component {
  render() {
    let requiredFieldIndicator = '';
    if (this.props.requiredField) {
      requiredFieldIndicator =
        <span className={this.props.spanClass}>*</span>;
    }
    return (
      <div id={this.props.divId} className={this.props.divClass}>
        <label htmlFor={this.props.inputId}>{this.props.labelValue}</label>
        {requiredFieldIndicator}
        <select
          id={this.props.inputId}
          className={ this.props.inputClass }
          name={ this.props.inputName }
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
        >
          <FormOptions options={ this.props.options } />
        </select>
        <span className={this.props.validationClass}>{this.props.validationText}</span>
      </div>
    )
  }
}

class CheckBox extends Component {
  render () {
    return ( 
      <div className={this.props.divClass}> 
        <input
          type="checkbox"
          id={this.props.inputId}
          className={this.props.inputClass}
          ref={this.props.referred}
          onClick={this.props.onClick}
          onChange={this.props.onChange}
          name={this.props.inputName}
          defaultValue={this.props.value}
        />
        <label htmlFor={this.props.inputId} className={this.props.labelClass}>{this.props.labelValue}</label> 
      </div>
    )
  } 
}

export {
  FormInputWithoutDiv,
  TextArea,
  FormInput,
  FormSelect,
  CheckBox,
}
