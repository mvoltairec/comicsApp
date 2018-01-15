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
    return (
      <div className='tableContainer'>
      {this.props.comics.map( (row,i) => {
        return (
          <div className='rows'>
            <TableRow key={i} value={i}>
              <TableRowColumn key={i} value={i}>{row.publisher}</TableRowColumn>
            </TableRow>
            <TableRow key={i} value={i}>
              <TableRowColumn key={i} value={i}>{row.title}</TableRowColumn>
            </TableRow>
            <TableRow key={i} value={i}>
              <TableRowColumn key={i} value={i}>{row.volume_number}</TableRowColumn>
            </TableRow>
            <TableRow key={i} value={i}>
              <TableRowColumn key={i} value={i}>{row.issue_number}</TableRowColumn>
            </TableRow>    
            <TableRow key={i} value={i}>
              <TableRowColumn key={i} value={i}>{row.release_date}</TableRowColumn>
            </TableRow>
            <TableRow key={i} value={i}>
              <TableRowColumn key={i} value={i}>{row.notes}</TableRowColumn>
            </TableRow>     
          </div>
        )
      })}
    </div>
    )
  }
}


export default ComicRows;
