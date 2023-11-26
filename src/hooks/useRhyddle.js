import { useState } from 'react';

//useRhyddle basically separates the logic from the ui
const useRhyddle = (solution) => {
    const [turn, setTurn] = useState(0) 
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // array of formatted guesses
    const [history, setHistory] = useState([]) // array of unformatted guesses (so no dupe guesses)
    const [isCorrect, setIsCorrect] = useState(false)

    //guessFormatted has colours
    const formatGuess = (guess) => {
        let guessFormatted = {};
        return guessFormatted;
    }

    const addNewGuess = (guess) => {

    }

    //could be from pressing enter/pressing ui
    const handleSubmit = () => {

    }

    return({turn,currentGuess,guesses,isCorrect})
}

export default useRhyddle;