import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ReactDOM from 'react-dom';

class NavigationBar extends Component {
  constructor() {
    super(); 
    this.state = { open: false };     
  }

  // TODO refactor below to utilize react router so that when user clicks on menu, appropriate view is rendered

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
        <div className='wrapper'>
          <AppBar title="My Comics Collection" 
                    iconClassNameRight="muidocs-icon-navigation-expand-more" 
                    onLeftIconButtonClick={this.handleToggle}/>
                    <Drawer 
                      open={this.state.open} 
                      width={300}
                      docked={false}
                      onRequestChange={(open) => this.setState({open})}
                    >
                      <MenuItem  primaryText="home"
                      containerElement={<Link to="/" />}
                      onClick={() => {
                        console.log('going home')
                        this.handleToggle()
                      }}
                      />

                      <MenuItem primaryText="add"
                      containerElement={<Link to="/comics/add"/>}
                      onClick={() => {
                        console.log('going to add a comic')
                        this.handleToggle()
                      }}
                      />
                      <MenuItem primaryText="edit"
                      containerElement={<Link to="/comics/edit" />}
                      onClick={() => {
                        console.log('going to edit screen')
                        this.handleToggle()
                      }}
                      />
                    </Drawer>
        </div>
    )
  }
}

export default NavigationBar;