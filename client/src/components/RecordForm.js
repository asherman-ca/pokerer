import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class RecordForm extends Component {
  componentDidMount() {
    $(document).ready(function() {
      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Record Form</h2>
        <input type="text" className="datepicker" />
      </div>
    );
  }
}

export default RecordForm;
