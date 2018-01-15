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
    console.log('what are the proops being passed to ComicRow component', this.props)
    return (
      <div className="cmx">
      <h3>List o comics</h3>
      <fieldset>
      <div className="cmx-table">
        <div className="cmx-header cmx-row">
          <div className="cmx-data">Publisher</div>
          <div className="cmx-data">Title</div>
          <div className="cmx-data">Volume #</div>
          <div className="cmx-data">Issue #</div>
          <div className="cmx-data">Date</div>
          <div className="cmx-data">Notes</div>
        </div>
      </div>
      {this.props.comics.map( (comic, i) => {
        // console.log('what is the transactions[i]', this.props.transactions[i])
        return <ComicRows key={i + 1} comic={comic} publisherParams={this.props.publisherParams} />;
      } )}
      </fieldset>
    </div>
    )
  }
}

export default ComicsTable;