//guess a number
//start a new game

export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = guess => ({
	type: GUESS_NUMBER,
	guess
});

export const NEW_NUMBER = 'NEW_NUMBER';
export const newNumber = (guess, number) => ({
	type: NEW_NUMBER,
	guess, 
	number
})
