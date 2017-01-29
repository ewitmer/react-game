import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import Guess from './guess';
import Feedback from './feedback';
import NewGame from './newGame';
import FewestGuesses from './fewest-guesses';
import CurrentScore from './current-score';

export default class Game extends React.Component {
    render() {

        return (
            <div>
                <Feedback />
                <Guess />
                <CurrentScore />
                <FewestGuesses />
                <NewGame />
            </div>
        );
    }
}

