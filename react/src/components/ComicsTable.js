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
      <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Publisher</TableHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Volume#</TableHeaderColumn>
        <TableHeaderColumn>Issue#</TableHeaderColumn>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Notes</TableHeaderColumn>
        <TableHeaderColumn>     </TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {/* <TableRow>
        <TableRowColumn><i className="material-icons">face</i></TableRowColumn>
        <TableRowColumn>The Incredible Hulk</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>DC</TableRowColumn>
        <TableRowColumn>Batman</TableRowColumn>
      </TableRow> */}
    {/* <ComicsTable comics={this.props.comics} publisherParams={this.props.publisherParams} /> */}
    {/* <ComicRows comics={this.props.comics} /> */}
    
    </TableBody>
  </Table>
    )
  }
}

export default ComicsTable;