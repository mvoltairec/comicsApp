import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter, } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// My views
import Home from './components/Home';
import ComicsAdd from './components/ComicsAdd';
import ComicsEdit from './components/ComicsEdit';
import ComicsList from './components/ComicsList';


injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      comics: [],
      filterParams: {} // params to filter the comics array by
    }
  }


  // will be called in component did mount for /Home so that on get req to home, all comics in db are served 
  getAllComics() {

  }

  // will pass filtered comics in the app state down to /Home as comics props
  getFilteredComics() {

  }

  // will be called in handleFormSubmit
  addComic() {
    // sends a post to the server  of the comic
  }
  
  // listening for button click signalling that comics should be pushed
  handleFormSubmit() {

  }

  // update
  editComic() {
    // put request to server
  }

  // removes comic
  removeComic() {
    // delete request to server
  }

  

  render () {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/comics/add" component={ComicsAdd}/>
          <Route exact path="/comics/edit" component={ComicsEdit}/>   
        </Switch>
      </main>
    );
  }
}

ReactDOM.render((
  <MuiThemeProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </MuiThemeProvider>
), document.getElementById('app'));