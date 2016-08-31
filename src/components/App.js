import React, {Component} from 'react';
import '../styles/main.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <div className="content">
                    <div className="add-container">
                        <input type="checkbox" className="toggle-all" />
                        <input type="text" placeholder="下一步要做什么？"
                            className="editText" />
                    </div>
                    
                    <ul className="items">
                        <li className="item completed">
                            <input id="1" className="toggle" type="checkbox" />
                            <label htmlFor="1" className="text">吃饭睡觉</label>
                            <button className="close-btn"></button>
                        </li>
                        <li className="item">
                            <input id="2" className="toggle" type="checkbox" />
                            <label htmlFor="2" className="text">吃饭睡觉</label>
                        </li>
                    </ul>

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
                </div>
            </div>
        );
    }
}

export default App;