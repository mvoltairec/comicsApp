import React, { Component } from 'react';
// import ComicsListEntry from './ComicsListEntry';

class ComicsList extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="comix">
        <h5> Filter button goes here</h5>
        <div className="comix-table">
          <div className="comix-row">
            <div className="comix-data">One comic item</div>
          </div>
          <div className="comix-row">
            <div className="comix-data">One comic item</div>
          </div>
          <div className="comix-row">
            <div className="comix-data">One comic item</div>
          </div>
          <div className="comix-row">
            <div className="comix-data">One comic item</div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default ComicsList;
