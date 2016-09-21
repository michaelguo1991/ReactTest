import React, {Component} from 'react';
import '../styles/main.css';
import AddTodo from './AddTodo';
import Items from './Items';
import Filter from './Filter';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  addItem(item) {
    this.state.items.add(item);
    this.setState({
      items: this.state.items
    });
  }

  render() {
    let hasItem = this.state.items.length > 0;
    let allCompleted = hasItem && this.state.items.findIndex((item) => {
      return item.status === 0
    }) === -1;

    return (
      <div>
        <h1>Todos</h1>
        <div className="content">
          <AddTodo hasItem={hasItem} allCompleted={allCompleted} addFn={this.addItem}/>

          <Items items={this.state.items}/>

          <Filter />
        </div>
      </div>
    );
  }
}

export default App;
