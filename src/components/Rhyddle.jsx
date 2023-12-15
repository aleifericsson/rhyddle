import { useEffect } from "react";
import { useRhyddle } from "../hooks/useRhyddle";
import InputButtons from "./InputButtons";
import Info from "./Info";
import Grid from "./Grid";


function Rhyddle({solution}) {
    const { handleInput, currentGuess, turn, guesses} = useRhyddle(solution);

    useEffect(()=>{
        const NRButtons = document.querySelectorAll(".NRButton");
        NRButtons.forEach(button => {
            button.addEventListener("click", handleInput);
        })

        return() => {
            NRButtons.forEach(button => {
                button.removeEventListener("click", handleInput);
            })
        }
    }, [handleInput])

	return(<>
        <h3>Rhyddle</h3>
        <Grid currentGuess={currentGuess} turn ={turn} guesses={guesses} solution={solution}/>
        <Info solution={solution}/>
		<InputButtons/>
	</>);
}


export default Rhyddle
