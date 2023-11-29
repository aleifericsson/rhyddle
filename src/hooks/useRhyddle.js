import { useState } from 'react';

//useRhyddle basically separates the logic from the ui
const useRhyddle = (solution) => {
    const [turn, setTurn] = useState(0) 
    const [currentGuess, setCurrentGuess] = useState([])
    const [guesses, setGuesses] = useState([]) // array of both formatted and unformed guesses (latter to check for dupes)
    const [isCorrect, setIsCorrect] = useState(false)
    const [hintsShowing, setHintsShowing] = useState([]) //empty, will fill up as user reveals hints

    //guessFormatted has colours, rn obsolete but just used to folow tutorial
    const formatGuess = (guess) => {
    }

    const addNewGuess = (guess) => {

    }

    const handleInput = (e) => {
        if (e.target.id ==="backspace")
        {
            let temp = currentGuess;
            temp.pop(e.target.id)
            setCurrentGuess(temp);
            console.log(currentGuess);
        } else{
            let temp = currentGuess;
            temp.push(e.target.id)
            setCurrentGuess(temp);
            console.log(currentGuess);
        }
    }

    //could be from pressing enter/pressing ui
    const handleSubmit = () => {

    }

    const handleHints = () => {
        /* Hints: (across 10 guesses)
            Reveal genre and description: FREE, always showing
            Reveal artist & year: 1 hint;
            Reveal song: 3 hints;
            Reveal number of notes: 1 hint;
            Reveal which notes are included: 1 hint;
            Last chance: leaves you with one guess left to transcribe the melody
        */
    }

    return({turn,currentGuess,guesses,isCorrect, handleInput})
}


export { useRhyddle };