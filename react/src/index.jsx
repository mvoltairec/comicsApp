import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter, } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from 'axios';

// My views
import Home from './components/Home';
import ComicsAdd from './components/ComicsAdd';
import ComicsEdit from './components/ComicsEdit';
import Link from 'react-router-dom';

injectTapEventPlugin();

// use componentWill mount or receive props instead of didmount;
// checkout history.push and wrapping withRouter to get the routing down

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      comic_id: '',
      comics: [],
      filterParams: {},
      formValues: {
        title: '',
        volumeNumber: 1,
        issueNumber: 1,
        releaseDate: '', /*add this in later if I get past mvp to allow sorting by year */
        notes: ''
      },
      publisherParams: {
        value: 0,
        primaryText: '',
        publisher_id: '',
        publishers: []
      },
      grabId: ''

    }
    this.handlePublisherSelect = this.handlePublisherSelect.bind(this);
    this.addComic = this.addComic.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.removeComic = this.removeComic.bind(this);
    this.editComic = this.editComic.bind(this);
    this.getInitialData = this.getInitialData.bind(this);
    this.handleEditComicSaveChanges = this.handleEditComicSaveChanges.bind(this);
    this.handleEditIconClick = this.handleEditIconClick.bind(this);
    this.grabId = this.grabId.bind(this);
  }

  /* TODO, if there's time
  
  addNewPublisher() {
    
  }
 */


  // will update the publisherParams 
  handlePublisherSelect(event, value) {
    // console.log('what is the state', this.state)
    // let publisherParams = this.state;
    // let publisherParams = Object.assign({}, this.state.publisherParams); //not modifying the state directly, making a copy
    let publisherParams = this.state.publisherParams;
    publisherParams.value = value;
    publisherParams.primaryText = publisherParams.publishers[value-1].name;
    publisherParams.publisher_id = publisherParams.publishers[value-1].id;
    this.setState({publisherParams}, () => console.log('the state after selection is now', this.state) )
    // console.log('the publisherParams copy', publisherParams, () => { console.log('state after selecting value is now', this.state)});
  }

  // getAllPublishers() {
  //   axios.get('/publishers').then(publishers => {
  //     console.log('getting all publishers', publishers);
  //     let publisherParams = this.state.publisherParams;
  //     publisherParams.publishers = publishers.data;
  //     this.setState({publisherParams}, () => {
  //       console.log('did the publisherParams state populate?', this.state);
  //     });
  //   })
  // }

  // will be called in component did mount for /Home so that on get req to home, all comics in db are served 
  // getAllComics() {
  //   axios.get('/comics').then(response => {
  //     console.log('getting all comics', response);
  //     let comics = response.data;
  //     this.setState({comics: response.data}, () => {console.log('what is the state after fetching comics', this.state)});
  //   })
  // } 

  getInitialData() {
    axios.all([
      axios.get('/publishers'), 
      axios.get('/comics')
    ])
    .then(axios.spread( (publishers, comics) => {
      // console.log('publishers data', publishers);
      // console.log('comics data', comics);
      let publisherParams = this.state.publisherParams;
      publisherParams.publishers = publishers.data;
      this.setState({publisherParams}, () => {
        // console.log('did the publisherParams state populate?', this.state);
        this.setState({comics: comics.data}, () => {console.log('what is the state after fetching comics', this.state)})
      });
    }))
}

  // will pass filtered comics in the app state down to /Home as comics props
  getFilteredComics() {

  }

  grabId() {
    const grabId = window.location.href.split('/').reverse()[0];
    this.setState({grabId});
  }


  //TODO: refactor addcomic so that it takes in comic and adds publisher value 
  // will be called in handleFormSubmit
  addComic() {
    // sends a post to the server  of the comic
    // let comics = this.state.comics.slice();
    // comics.push(comic);
  
    let comic = {
      publisher_id: this.state.publisherParams.publisher_id,
      title: this.state.formValues.title,
      volumeNumber: this.state.formValues.volumeNumber,
      issueNumber: this.state.formValues.issueNumber,
      releaseDate: this.state.formValues.releaseDate,
      notes: this.state.formValues.notes
    };
    console.log('what is the comic from the client side before posting', comic);
    axios.post('/comics/add', comic)
      .then(response => {
        console.log('the server responded with', response)
      }) // want the server to redirect to home 
  }
  
  // listening for button click signalling that comics should be pushed
  handleFormSubmit(e) {
   this.addComic();
  }

  handleFormChange(e) {
    e.preventDefault();
    let formValues = this.state.formValues;
    let name = e.target.name;
    let value = e.target.value;
  
    formValues[name] = value;
  
    this.setState({formValues});
    console.log('current state in the app component', this.state);
  }


  // update
  editComic(id) {
    // put request to server
    console.log('edit comic should grab this id', id);
    // <Link to={`/comics/edit/:${id}`} activeClassName="active"></Link>
    window.location.replace('http://localhost:9000/comics/edit/'+ id);
  }

  handleEditIconClick(e){
    this.editComic(id);
  };

  handleEditComicSaveChanges(e) {
    e.preventDefault();
    let comic = {
      id: this.state.grabId,
      publisher_id: this.state.publisherParams.publisher_id,
      title: this.state.formValues.title,
      volumeNumber: this.state.formValues.volumeNumber,
      issueNumber: this.state.formValues.issueNumber,
      releaseDate: this.state.formValues.releaseDate,
      notes: this.state.formValues.notes
    };
    axios.put('/comics/edit/:id', comic).then(
      response => {
        console.log('response from serever after sending put request', response);
      }
    )
  }
  // removes comic
  removeComic(id) {
    // delete request to server
    // maybe should be expecting an id as params which will be passed in from child component handler
    console.log('delete the comic with this idfrom the db', id);
    let comics = this.state.comics;
    let delThisResourse = comics.find(comic => {
      return comic.id === id;
    })
    console.log('what is delThisResource', delThisResourse);
    axios.delete('/comics/:id', {
      params: delThisResourse
    }).then(response => {
      console.log('res', response);
    })
    // console.log('also make a call to componentdid or will mount to update the state?? Or maybe that just happens as a redirect to home (to re-render the whole page, making get request??');
  }

  componentDidMount() {
    // this.getAllPublishers(); 
    // this.getAllComics();
    this.getInitialData();
  }
  

  render () {
    console.log('the app components current state', )
    return (
      <main>
        <Switch>
          <Route exact path="/" render={ ()=> <Home comics={this.state.comics} publisherParams={this.state.publisherParams} removeComic={this.removeComic} handleEditIconClick={this.handleEditIconClick} editComic={this.editComic}/> }/>
          <Route exact path="/comics/add" render={ ()=> <ComicsAdd addComic={this.addComic} handleFormSubmit={this.handleFormSubmit} handleFormChange={this.handleFormChange} handlePublisherSelect={this.handlePublisherSelect} publisherParams={this.state.publisherParams}/> } />
          <Route exact path="/comics/edit" render={ ()=> <ComicsEdit grabId={this.grabId} editComic={this.editComic} handleEditComicSaveChanges={this.handleEditComicSaveChanges} handleFormChange={this.handleFormChange} handlePublisherSelect={this.handlePublisherSelect} publisherParams={this.state.publisherParams}/> } />          
          {/* <Route exact path="/comics/edit" component={ComicsEdit}/>    */}
          <Route exact path="/comics/edit/:id" render={ ()=> <ComicsEdit grabId={this.grabId} editComic={this.editComic} handleEditComicSaveChanges={this.handleEditComicSaveChanges} handleFormChange={this.handleFormChange} handlePublisherSelect={this.handlePublisherSelect} publisherParams={this.state.publisherParams}/> } />>   
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