import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import ComicsList from './components/ComicsList';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = { open: false };     
  }

  // TODO refactor below to utilize react router so that when user clicks on menu, appropriate view is rendered

  render() {
    return (
      <MuiThemeProvider>
        <div className='wrapper'>
          <AppBar title="My Comics Collection" 
          iconClassNameRight="muidocs-icon-navigation-expand-more" 
          onLeftIconButtonClick={() => this.setState({open: !this.state.open})}/>
          <Drawer 
            open={this.state.open} 
            docked={false}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem>Home</MenuItem>
            <MenuItem>Add</MenuItem>
            <MenuItem>Edit</MenuItem>
          </Drawer>
          <ComicsList />
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));