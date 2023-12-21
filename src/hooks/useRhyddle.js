import { useState } from 'react';
import { checkLength } from '../scripts/solutions';
import { Guess } from '../scripts/rhythm_schema';
import { hint_list } from '../scripts/hint_classes';

//useRhyddle basically separates the logic from the ui
const useRhyddle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState([]);
    const [guesses, setGuesses] = useState([...Array(10).fill([])]); // array of both formatted and unformed guesses (latter to check for dupes)
    const [history, setHistory] = useState([...Array(10).fill([])]); //each guess is just an array and not an object here
    const [isCorrect, setIsCorrect] = useState(false);
    const [hintList, setHintList] = useState(hint_list); //empty, will fill up as user reveals hints
    const [viewMode, setViewMode] = useState("Note Order"); //Note Order or Note Placement

    const addGuess = (curGues = []) => {
        let temp;
        if (curGues.length != 0){
            temp = [...history];
            temp[turn] = curGues;
            console.log(temp);
            setHistory(temp);
            console.log(history);
            temp = [...guesses];
            const guess = new Guess(curGues);
            guess.formatNotes(solution);
            temp[turn] = guess;
            console.log(temp);
            setGuesses(temp);
            console.log(guesses);
        }
        else{
            temp = [...history];
            temp[turn] = currentGuess;
            console.log(temp);
            setHistory(temp);
            console.log(history);
            temp = [...guesses];
            const guess = new Guess(currentGuess);
            guess.formatNotes(solution);
            temp[turn] = guess;
            console.log(temp);
            setGuesses(temp);
            console.log(guesses);
        }
        temp = turn;
        setTurn(temp + 1);
        checkGuess();
    }

    const checkGuess = () => {
        solution.simplifyNotes();
        if (JSON.stringify(currentGuess) === JSON.stringify(solution.simple_notes)){
            setIsCorrect(true);
            console.log("finish");
        }
        setCurrentGuess([]);
    }

    const handleInput = (e) => {
        if (e.currentTarget.id ==="backspace")
        {
            let temp = [...currentGuess];
            temp.pop(e.currentTarget.id);
            setCurrentGuess(temp);
            console.log(currentGuess);
        }
        else if (e.currentTarget.id === "enter"){
            if(history[9].length != 0){
                console.log("too many guesses")
                return;
            }
            let double_guess = false;
            history.forEach(arr => {
                if (JSON.stringify(arr) === JSON.stringify(currentGuess)){
                    double_guess = true;
                }
            })
            if (double_guess){
                console.log("repeat guess")
                return;
            }

            if(checkLength(currentGuess) != 8){
                console.log("doesn't add up to 2 bars");
                return;
            }
            addGuess();      
        } else{
            let temp = [...currentGuess];
            temp.push(e.currentTarget.id);
            if(checkLength(temp) <= 8){
                setCurrentGuess(temp);
            }
            
        }
    }

    const handleHints = (e) => {
        /* Hints: (across 10 guesses)
            Reveal genre and description: FREE, always showing
            Reveal artist & year: 1 hint;
            Reveal song: 3 hints;
            Reveal number of notes: 1 hint;
            Reveal which notes are included: 1 hint;
            Last chance: leaves you with one guess left to transcribe the melody
        */
        let temp = [...hintList];
        let hint = temp.find(hint => hint.name === e.currentTarget.id)
        let index = temp.indexOf(hint);
        if (hint.showing === false) //ensures only pressed once
        {
            console.log(hint.name);
            temp[index].showing = true
            setHintList(temp);
            console.log(hintList)
            for(let i=0; i<hint.cost; i++){
                addGuess(Array(16).fill("x"));
            }
            //if name == something do something extra
        }
    }

    const toggleMode = () => {
        let temp = viewMode;
        if (temp === "Note Order"){
            setViewMode("Note Placement");
        }
        else{
            setViewMode("Note Order")
        }
    }

    return({turn,currentGuess,guesses,isCorrect, viewMode, handleInput, toggleMode, handleHints, hintList})
}


export { useRhyddle };