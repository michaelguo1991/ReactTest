import React, {Component} from 'react';

class Items extends Component {
  render() {

    return (
      <ul className="items">
        {
          this.props.items.forEach((item, index) => {
            return (
              <li className="item {item.status === 1 ? 'completed' : ''}">
                <input id="index" className="toggle" type="checkbox"
                       checked="{item.status === 1 ? 'checked' : ''}" />
                <label htmlFor="index" className="text">{item.content}></label>
                <button className="close-btn"></button>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default Items;
