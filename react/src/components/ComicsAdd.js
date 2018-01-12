import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500, blue500} from 'material-ui/styles/colors';

class ComicsAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        publisher: '',
        title: '',
        volumeNumber: 1,
        issueNumber: 1,
        releaseDate: '', /*add this in later if I get past mvp to allow sorting by year */
        notes: ''
      }
    }
  }

// TODO: form validation to make the publisher, and title required, also throw an error if entered publish
// Date is not of the form MM-YYYY (so that I can transform it into a date using moment, will help with being able to sort)

handleFormChange(e) {
  e.preventDefault();
  let formValues = this.state.formValues;
  let name = e.target.name;
  let value = e.target.value;

  formValues[name] = value;

  this.setState({formValues});
  console.log('current state is', this.state.formValues);
}


  render() {
    return (
      <div>
        <NavigationBar />
        <div className="addComix">
          <br/>
          <h3>Fill in the details below</h3>
          <br/>
          <form>
            <fieldset>
              {/* <TextField
                name="publisher"
                hintText="e.g. Marvel, DC, Image, ..."
                floatingLabelText="Publisher"
                onChange={this.handleFormChange.bind(this)}
                fullWidth={true}
              /> */}

              <br/>
              <TextField
                name="title"
                hintText="e.g. Batman"
                floatingLabelText="Title"
                onChange={this.handleFormChange.bind(this)}
                fullWidth={true}
              />
              <br/>
              <TextField
                name="volumeNumber"
                hintText="1"
                floatingLabelText="Volume Number"
                onChange={this.handleFormChange.bind(this)}
                fullWidth={true}
              />
              <br/>
              <TextField
                name="issueNumber"
                hintText="27"
                floatingLabelText="Issue Number"
                onChange={this.handleFormChange.bind(this)}
                fullWidth={true}
              />
              <br/>
              <TextField
                name="releaseDate"
                hintText="MM-YYYY"
                floatingLabelText="Publish Date"
                onChange={this.handleFormChange.bind(this)}
                fullWidth={true}
                />
              <br/>
              <TextField
                name="notes"
                hintText="helpful notes to self about this comic go here"
                floatingLabelText="Notes"
                multiLine={true}
                rows={2}
                onChange={this.handleFormChange.bind(this)}
                fullWidth={true}
                />
                <br/>
                <br/>
                </fieldset>
              </form>
        </div>
      </div>
    );
  }
}

export default ComicsAdd;
