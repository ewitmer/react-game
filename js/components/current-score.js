import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import store from '../store';
import * as actions from '../actions/index';

export class CurrentScore extends React.Component {
    constructor(props) {
        super(props);
    }


    render(props) {

        return (
            <div>
                Number of guesses: {this.props.currentScore}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
  return {
    currentScore: state.currentScore,
  }
}

export default connect(mapStateToProps)(CurrentScore);