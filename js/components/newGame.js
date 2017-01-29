import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import store from '../store';
import * as actions from '../actions/index';

export default class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        console.log(store.getState())
        store.dispatch(actions.newNumber());
        console.log(store.getState())
    }

    render() {

        return (
            <div>
                <button onClick={this.onButtonClick}>New Game</button>
            </div>
        );
    }
}