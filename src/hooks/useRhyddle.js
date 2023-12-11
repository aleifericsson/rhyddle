import { useState } from 'react';
import { checkLength } from '../scripts/solutions';
import { Guess } from '../scripts/rhythm_schema';

//useRhyddle basically separates the logic from the ui
const useRhyddle = (solution) => {
    const [turn, setTurn] = useState(0) 
    const [currentGuess, setCurrentGuess] = useState([])
    const [guesses, setGuesses] = useState([]) // array of both formatted and unformed guesses (latter to check for dupes)
    const [history, setHistory] = useState([])//each guess is just an array and not an object here
    const [isCorrect, setIsCorrect] = useState(false)
    const [hintsShowing, setHintsShowing] = useState([]) //empty, will fill up as user reveals hints

    const addGuess = () => {
        let temp = history;
        temp.push(currentGuess);
        setHistory(temp);
        console.log(history);
        temp = guesses;
        const guess = new Guess(currentGuess);
        guess.formatNotes(solution);
        temp.push(guess);
        setGuesses(temp);
        console.log(guesses);
        checkGuess();
    }

    const checkGuess = () => {
        solution.simplifyNotes();
        console.log(solution.simple_notes)
        if (currentGuess == solution.simple_notes){
            setIsCorrect(true);
            console.log("finish");
        }
        else{
            setCurrentGuess([]);
        }
    }

    const handleInput = (e) => {
        if (e.currentTarget.id ==="backspace")
        {
            let temp = currentGuess;
            temp.pop(e.currentTarget.id);
            setCurrentGuess(temp);
            console.log(currentGuess);
        }
        else if (e.currentTarget.id === "enter"){
            if(history.length > 9){
                console.log("too many guesses")
                return;
            }
            if ( history.includes(currentGuess)){
                console.log("repeat guess")
                return;
            }

            if(checkLength(currentGuess) != 8){
                console.log("doesn't add up to 2 bars");
                return;
            }
            addGuess();      
        } else{
            let temp = currentGuess;
            temp.push(e.currentTarget.id);
            setCurrentGuess(temp);
            console.log(currentGuess);
        }
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