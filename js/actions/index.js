//guess a number
//start a new game
import 'isomorphic-fetch';
import store from '../store';

export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = guess => ({
	type: GUESS_NUMBER,
	guess: guess
});

export const NEW_NUMBER = 'NEW_NUMBER';
export const newNumber = () => ({
	type: NEW_NUMBER
})

export const COUNTER = 'COUNTER';
export const counter = currentScore => ({
    type: COUNTER,
    currentScore: currentScore
});

export const FETCH_FEWEST_SUCCESS = 'FETCH_FEWEST_SUCCESS';
export const fetchFewestSuccess = fewestGuesses => ({
    type: FETCH_FEWEST_SUCCESS,
    fewestGuesses: fewestGuesses
});

export const FETCH_FEWEST_ERROR= 'FETCH_FEWEST_ERROR';
export const fetchFewestError = error => ({
    type: FETCH_FEWEST_ERROR,
    error: error
});

export const FETCH_FEWEST= 'FETCH_FEWEST';
export const fetchFewest = dispatch => {
    const url = `http://localhost:3000/fewest-guesses`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(fewestGuesses =>
        dispatch(fetchFewestSuccess(fewestGuesses))
    )
    .catch(error =>
        dispatch(fetchFewestError(error))
    );
};


export const postFewest = (dispatch) => {
    console.log('postFewest')
    const state = store.getState();
    const url = `http://localhost:3000/fewest-guesses/${state.currentScore}`;
    return fetch(url, {method: 'post'}).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data =>
        console.log(`the current fewest guesses is: ${data}`)
    )
    .catch(error =>
        console.log(error)
    );
};


