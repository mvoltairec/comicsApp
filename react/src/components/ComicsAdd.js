import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

class ComicsAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        publisher: '',
        seriesTitle: '',
        issueTitle: '',
        volumeNumber: 1,
        issueNumber: 1,
        releaseDate: '', /*add this in later if I get past mvp to allow sorting by year */
        notes: ''
      }
    }
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="addComix">
          <br/>
          <h3>Fill in the details below</h3>
          <br/>
          <TextField
            id="publisher"
            hintText="e.g. Marvel, DC, Image, ..."
            floatingLabelText="Publisher"
          />
          <br/>
          <TextField
            id="title"
            hintText="e.g. Batman"
            floatingLabelText="Title"
          />
          <br/>
          <TextField
            id="volumeNumber"
            hintText="1"
            floatingLabelText="Volume Number"
          />
          <br/>
          <TextField
            id="issueNumber"
            hintText="27"
            floatingLabelText="Issue Number"
          />
          <br/>
          <TextField
            id="releaseDate"
            hintText="July 2013"
            floatingLabelText="Publish Date"
          />
          <br/>
          <TextField
            id="notes"
            hintText="helpful notes to self about this comic go here"
            floatingLabelText="Notes"
            multiLine={true}
            rows={2}
            />
        </div>
      </div>
    );
  }
}

export default ComicsAdd;
