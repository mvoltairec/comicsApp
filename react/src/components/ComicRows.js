import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


// map over Array(6) for each column in table
class ComicRows extends Component {
  constructor(props){
    super(props);
  }
  

  
  render() {
    console.log('what are the proops being passed to ComicRow component', this.props)
    let id = this.props.comic.publisher_id;
    let publishers = this.props.publisherParams.publishers;
    // look for the array object
    let publisherName = publishers.find( publisher => {
     return publisher.id === id;
    }).name;

    return (
      <div className="cmx-row">
        <div className="cmx-data">{publisherName}</div>
        <div className="cmx-data">{this.props.comic.title}</div>
        <div className="cmx-data">{this.props.comic.volume_number}</div>
        <div className="cmx-data">{this.props.comic.issue_number}</div>
        <div className="cmx-data">{this.props.comic.release_date}</div>
        <div className="cmx-data">{this.props.comic.notes}</div>
      </div>
    )
  }
}


export default ComicRows;
