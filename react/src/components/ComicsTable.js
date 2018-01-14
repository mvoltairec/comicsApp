import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const ComicsTable = () => (
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
      <TableRow>
        <TableRowColumn><i className="material-icons">face</i></TableRowColumn>
        <TableRowColumn>The Incredible Hulk</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>DC</TableRowColumn>
        <TableRowColumn>Batman</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default ComicsTable;