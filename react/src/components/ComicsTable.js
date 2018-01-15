import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import ComicRows from './ComicRows';

class ComicsTable extends Component {
  constructor(props){
    super(props);
  }

  
  
  render() {
    // console.log('what are the proops being passed to ComicRow component', this.props)
    return (
      <div className="cmx">
      <h3>List o comics</h3>
      <fieldset>
      <div className="cmx-table">
        <div className="cmx-header cmx-row">
          <div className="cmx-data cmx-pub">Publisher</div>
          <div className="cmx-data cmx-title">Title</div>
          <div className="cmx-data cmx-vol-num">Volume #</div>
          <div className="cmx-data cmx-iss-num">Issue #</div>
          <div className="cmx-data cmx-date">Date</div>
          <div className="cmx-data cmx-notes">Notes</div>
          <div className="cmx-data cmx-update">Update</div>
        </div>
      </div>
      {this.props.comics.map( (comic, i) => {
        // console.log('what is the transactions[i]', this.props.transactions[i])
        return <ComicRows key={i + 1} comic={comic} editComic={this.props.editComic} handleEditIconClick={this.props.handleEditIconClick} publisherParams={this.props.publisherParams} removeComic={this.props.removeComic}/>;
      } )}
      </fieldset>
    </div>
    )
  }
}

export default ComicsTable;