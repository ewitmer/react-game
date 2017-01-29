import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import store from '../store';
import * as actions from '../actions/index';

export class Guess extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        store.dispatch(actions.guessNumber(document.getElementById('guess').value));
        store.dispatch(actions.counter());
        document.getElementById('inputForm').reset();
    }

    render() {

        return (
            <div>
                <form id="inputForm" onSubmit={this.handleSubmit}>
                    <label>
                    Guess:
                    <input type="text" id="guess" />
                    </label>
                    <input type="submit" value="Submit" />
                 </form>
               Your guess is: {this.props.guess}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
  return {
    guess: state.guess,
    correctNumber: state.correctNumber,
    currentScore: state.currentScore
  }
}

export default connect(mapStateToProps)(Guess);