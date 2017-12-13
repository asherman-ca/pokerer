import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class RecordForm extends Component {
  componentDidMount() {
    // console.log($);
    // $('.datepicker').datepicker();
    $('select').select();
  }

  render() {
    return (
      <div className="record-form-container">
        <form className="col s12 record-form">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label for="first_name">Location</label>
            </div>
            <div className="input-field col s6">
              <input id="date" type="text" className="datepicker" />
              <label for="date">Date</label>
            </div>
          </div>
          <div className="row" />
        </form>
      </div>
    );
  }
}

export default RecordForm;
