import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import PublisherDropDown from './PublisherDropDown';
import {orange500, blue500} from 'material-ui/styles/colors';

// TODO: If there's time, modify the publisher to be  aselect drop down so that a user can select the publisher
// and then add the option to select other which will bring up a drop down to allow a user to add a publisher that is not already on the list



class ComicsAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
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
  // e.preventDefault();
  // let formValues = this.state.formValues;
  // let name = e.target.name;
  // let value = e.target.value;

  // formValues[name] = value;

  // this.setState({formValues});
  // console.log('current state is', this.state.formValues);
  this.props.handleFormChange(e);
}

handleSubmit(e) {
  e.preventDefault();
  // console.log('state when pressing submit button is', this.state)
  let comic = this.state.formValues;
  this.props.handleSubmit(e);
  // want the server to redirect to home 
}


  render() {
    console.log('where are props for comic add', this.props)
    return (
      <div>
        <NavigationBar />
        <div className="addComix">
          <br/>
          <h3>Fill in the details below</h3>
          <br/>
          <form>
            <fieldset>
              <PublisherDropDown handlePublisherSelect={this.props.handlePublisherSelect} publisherParams={this.props.publisherParams}/>
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
                <RaisedButton label="submit" onClick={e =>this.handleSubmit(e)}/> 
                </fieldset>
              </form>
        </div>
      </div>
    );
  }
}

export default ComicsAdd;
