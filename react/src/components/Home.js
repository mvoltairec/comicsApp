import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavigationBar from './NavigationBar';
import ComicsTable from './ComicsTable';

class Home extends Component {
  constructor() {
    super(); 
    this.state = { open: false };     
  }

  // TODO refactor below to utilize react router so that when user clicks on menu, appropriate view is rendered

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    console.log('what are the proops being passed to Home component', this.props)
    return (
        <div className='wrapper'>
          <NavigationBar />
          <ComicsTable comics={this.props.comics} publisherParmas={this.props.publisherParmas}/>
        </div>
    )
  }
}

export default Home;