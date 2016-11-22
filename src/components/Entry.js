import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appReducers from '../reducers';
import TodoApp from './TodoApp';

let store = createStore(appReducers);
store.subscribe(() => {
    console.log(store.getState());
})

class Entry extends Component {
    render() {
        return (
            <Provider store={store}>
                <TodoApp />
            </Provider>
        );
    }
}

export default Entry