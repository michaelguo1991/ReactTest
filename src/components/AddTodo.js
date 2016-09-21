import React, {Component} from 'react';

var ENTER_KEY = 13;

class AddTodo extends Component {
  constructor() {
    super();
  }

  handleKeyDown(e) {
    if (e.keyCode !== ENTER_KEY) {
      return;
    }

    e.preventDefault();
    this.props.addFn({
      status: 0,
      content: e.target.value
    });
  }

  render() {
    return (
      <div className="add-container">
          <input type="checkbox" className="toggle-all"
                 style={{visibility: this.props.hasItem ? 'inherit' : 'hidden'}}
                 checked={this.props.allCompleted ? 'checked' : ''} />
          <input type="text" placeholder="下一步要做什么？"
              className="editText"
              onKeyDown={this.handleKeyDown.bind(this)} />
      </div>
    );
  }
}

export default AddTodo;
