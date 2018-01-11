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