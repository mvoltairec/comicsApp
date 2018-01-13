import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavigationBar from './NavigationBar';
import ComicsList from './ComicsList';
import TableExampleSimple from './TableExampleSimple';

class Home extends Component {
  constructor() {
    super(); 
    this.state = { open: false };     
  }

  // TODO refactor below to utilize react router so that when user clicks on menu, appropriate view is rendered

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
        <div className='wrapper'>
          <NavigationBar />
          {/* <ComicsList /> */}
          <TableExampleSimple />
        </div>
    )
  }
}

export default Home;