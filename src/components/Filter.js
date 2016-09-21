import React, {Component} from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="filter-container">
          <span className="count">0 items left</span>
          <ul className="filters">
              <li className="filter">
                  <a className="selected">All</a>
              </li>
              <li className="filter">
                  <a className="">Active</a>
              </li>
              <li className="filter">
                  <a className="">Completed</a>
              </li>
          </ul>
          <a className="clear-action">Clear completed</a>
      </div>
    );
  }
}

export default Filter;
