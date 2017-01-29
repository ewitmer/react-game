import * as actions from '../actions/index';

const initialState = {
	correctNumber: Math.round(Math.random() * 100),
	guess: 0,
	feedback: "Guess a number between 1-100",
    currentScore: 0,
    fewestGuesses: 100,
    endGame: false
};

export const hotColdReducer = (state=initialState, action) => {

    if (action.type === actions.NEW_NUMBER) {
        return {...initialState, correctNumber: Math.round(Math.random() * 100)}
    }

    else if (action.type === actions.COUNTER) {
        return {...state, currentScore: state.currentScore + 1}
    }

    else if (action.type === actions.GUESS_NUMBER) {
        
        var userGuess = parseInt(action.guess, 10);

        if ((userGuess > 0 && userGuess < 100) === false) {
            return {...state, feedback: 'Please select a number between 1-100'}
        }

        var difference = Math.abs(userGuess - state.correctNumber);

        if (difference === 0) {
            return {...state, feedback: "You got it!", guess: userGuess, endGame: true}
        };

        var feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        return {...state, feedback: feedback, guess: userGuess}
    }

    else if (action.type === actions.FETCH_FEWEST_SUCCESS) {
        return {...initialState, fewestGuesses: action.fewestGuesses};
    }

    else if (action.type === actions.FETCH_FEWEST_ERROR) {
        // Find the index of the matching repository
        console.log(action.error);
        return state;
    }

    return state;
};