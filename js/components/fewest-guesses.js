import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import store from '../store';
import * as actions from '../actions/index';

export class FewestGuesses extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
       this.props.dispatch(actions.fetchFewest) 
    }

    render(props) {
        return (
            <div>
                Fewest Guesses: {this.props.fewestGuesses}
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

export default connect(mapStateToProps)(FewestGuesses);


store.subscribe(function fetcher() {
  const state = store.getState();
  const ending = state.endGame;

  if (ending) {
    console.log('ending game')
    actions.postFewest(state.currentScore)
  }
   
});