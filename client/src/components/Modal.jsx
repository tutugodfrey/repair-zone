import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/actions';

export class Modal extends Component {
  closeConsoleModal(event) {
    event.preventDefault();
    this.props.clearErrorValue();
  }
  render() {
    const { errorStatus, errorMessage } = this.props;
    let display = 'd-none';
    if (errorStatus) {
      display = 'd-block'
    } 
    return (
      <div className={`${display}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.closeConsoleModal.bind(this)} data-dismiss="modal">
              <span aria-hidden="true" className="text-danger">&times;</span></button>
            </div>
            <div className="modal-body">
              <p className="text-black">{errorMessage}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps =(state) => {
  const { errorStatus, errorMessage } = state.pageReducer;
  return {
    errorStatus,
    errorMessage,
  }
}

const mapDispatchToProps = (dispatch) => {
  const { clearErrorValue} = actions;
  return bindActionCreators({
    clearErrorValue
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
