import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginLeft: 20
};

const labelStyle = {
  color: '#30673a',
  fontSize: 15,
  fontWeight: 'bold',
  display: 'flex',
  marginLeft: 3
};

const items = [
  <MenuItem key={1} value={1} primaryText="Kelly's Spot" />,
  <MenuItem key={2} value={2} primaryText="App Academy" />
];

class RecordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spot: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    if (value === 1) {
      this.setState({ spot: "Kelly's Spot" });
    } else {
      this.setState({ spot: 'App Academy' });
    }
  }

  render() {
    return (
      <div className="record-form">
        <div className="record-form-container">
          <div>
            <Paper zDepth={2}>
              <SelectField
                style={style}
                value={this.state.spot}
                onChange={this.handleChange}
                floatingLabelText="Select Location"
                underlineShow={false}
              >
                {items}
              </SelectField>
              <Divider />
              <DatePicker
                style={style}
                hintText="Select Date"
                mode="landscape"
                underlineShow={false}
              />
              <Divider />
              <TextField
                hintText="David Hu's take/loss"
                style={style}
                underlineShow={false}
              />
              <Divider />
              <TextField
                hintText="Kelly Chung's take/loss"
                style={style}
                underlineShow={false}
              />
              <Divider />
              <TextField
                hintText="Alex Sherman's take/loss"
                style={style}
                underlineShow={false}
              />
              <Divider />
              <TextField
                hintText="Daniel Chang's take/loss"
                style={style}
                underlineShow={false}
              />
              <Divider />
              <TextField
                hintText="Matthew Kerchner's take/loss"
                style={style}
                underlineShow={false}
              />
              <Divider />
              <TextField
                hintText="Raymond's take/loss"
                style={style}
                underlineShow={false}
              />
              <Divider />
              <RaisedButton
                label="Submit"
                labelStyle={labelStyle}
                fullWidth={true}
                className="submit-button"
              />
              <Divider />
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default RecordForm;
