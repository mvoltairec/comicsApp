import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class SelectFieldExampleSimple extends Component {
  state = {
    value: 0,
    primaryText: 'Marvel',
    publishers: ['Marvel', 'DC Comics', 'Image', 'IDW', 'Dark Horse Comics', 'Valiant', 'Vertigo', 'Shonen Jump', 'Wild Storm', 'Other']
  };
  
  
  handleChange = (event, value) => this.setState({value: value, primaryText: this.state.publishers[value]}, () => { console.log('state after selecting value is now', this.state)});

  render() {
    console.log('selected was', this.state)
    return (
      <div>
        <SelectField
          floatingLabelText="Publisher"
          value={this.state.value}
          onChange={this.handleChange}
        > 
          {this.state.publishers.map( (publisher, i) => {
          // console.log('found publisher', publisher, i)
            return <MenuItem value={i} key={i} primaryText={publisher} name={publisher}/>
          })}

          {/* <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" /> */}
        </SelectField>
      </div>
    );
  }
}

