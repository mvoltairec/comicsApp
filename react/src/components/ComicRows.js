import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Editor from 'material-ui/svg-icons/editor/mode-edit';
import Delete from 'material-ui/svg-icons/action/delete';

// map over Array(6) for each column in table
class ComicRows extends Component {
  constructor(props){
    super(props);
  }
  
  handleDeleteClick = () => {
    let id = this.props.comic.id;
    console.log('in comicrows, the comic that will be deleted is', this.props.comic)
    this.props.removeComic(id);
    // needs to grab the id of the comic
  }

  handleEditIconClick = (e) => {
    let id = this.props.comic.id;
    console.log('in comicrows, the comic that will be updated is', this.props.comic)
    this.props.editComic(id);
  }
  
//   componentWillReceiveProps(nextProps){
//     // console.log('PUBLISHER COMPONENT RECEIVED PROPS?', this.props)
//     if(nextProps.value !== this.props.value){
//         this.setState({publisherParams});
//     }
// }

// // set the state to receive props from parent
//   componentWillMount() {
//     // console.log('what is the state before mounting', this.state)
//     this.setState({publisherParams: this.props.publisherParams}, () => { console.log('what is the state after setting state in publishers componentwillmount', this.state)})
//   }
  
  render() {
    // console.log('what are the proops being passed to ComicRow component', this.props)
    let id = this.props.comic.publisher_id;
    let publishers = this.props.publisherParams.publishers;
    // look for the array object
    let publisherName = publishers.find( publisher => {
     return publisher.id === id;
    }).name;

    let iconStyle = {
      marginRight: 24,
    };

    return (
      <div className="cmx-row">
        <div className="cmx-data">{publisherName}</div>
        <div className="cmx-data">{this.props.comic.title}</div>
        <div className="cmx-data">{this.props.comic.volume_number}</div>
        <div className="cmx-data">{this.props.comic.issue_number}</div>
        <div className="cmx-data">{this.props.comic.release_Date}</div>
        <div className="cmx-data">{this.props.comic.notes}</div>
        <div className="cmx-data"> 
          <IconButton >
            <Editor style={iconStyle} onClick={this.handleEditIconClick}/> 
          </IconButton>
          <IconButton >
            <Delete onClick={this.handleDeleteClick}/>
          </IconButton>
          </div>
      </div>
    )
  }
}


export default ComicRows;
