import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import store from '../store';
import * as actions from '../actions/index';

export class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    
    componentWillUpdate() {
       this.props.dispatch(actions.fetchFewest) 
    }

    onButtonClick() {
        store.dispatch(actions.newNumber());
        console.log(actions)
    }

    render() {

        return (
            <div>
                <button onClick={this.onButtonClick}>New Game</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
  return {
    fewestGuesses: state.fewestGuesses,
    currentScore: state.currentScore
  }
}

export default connect(mapStateToProps)(NewGame);

