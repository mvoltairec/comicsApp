import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class PublisherDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publisherParams: {
        value: 0,
        primaryText: 'Marvel',
        publishers: ['Vertigo', 'Shonen Jump', 'Wild Storm', 'Other']
      }
    };
    this.handlePublisherSelect = this.handlePublisherSelect.bind(this);
  }
  

 // if changes were made in parent component (like more publishers added in a future verison of the app), then update the child component
 
  componentWillReceiveProps(nextProps){
    // console.log('PUBLISHER COMPONENT RECEIVED PROPS?', this.props)
    if(nextProps.value !== this.props.value){
        this.setState({publisherParams});
    }
}

// set the state to receive props from parent
  componentWillMount() {
    // console.log('what is the state before mounting', this.state)
    this.setState({publisherParams: this.props.publisherParams}, () => { console.log('what is the state after setting state in publishers componentwillmount', this.state)})
  }
  addNewPublisher () {
    // should be called in handleSelect change when other is selected
  }
  
  handlePublisherSelect (event, value) {
    event.preventDefault();
    // console.log('what is the state', this.state)
    // let publisherParams = this.state;
    // let publisherParams = Object.assign({}, this.state.publisherParams); //not modifying the state directly, making a copy
    let publisherParams = this.state.publisherParams;
    publisherParams.value = value;
    publisherParams.primaryText = publisherParams.publishers[value];
    this.setState({publisherParams}, )
    // console.log('the publisherParams copy', publisherParams, () => { console.log('state after selecting value is now', this.state)});
    this.props.handlePublisherSelect(event, value);
  }

    // handleChange = (event, value) => this.setState({value: value, primaryText: this.state.publishers[value]}, () => { console.log('state after selecting value is now', this.state)});

  render() {
    // console.log('the state of publish component when rendering', this.state)
    return (
      <div>
        <SelectField
          floatingLabelText="Publisher"
          value={this.state.publisherParams.value}
          onChange={this.handlePublisherSelect}
        > 
          {this.state.publisherParams.publishers.map( (publisher, i) => {
          // console.log('found publisher', publisher, i)
            // console.log('what does the publiosher item look like', publisher);
            return <MenuItem value={i} key={i} primaryText={publisher.name} />
          })}
        </SelectField>
      </div>
    );
  }
}

