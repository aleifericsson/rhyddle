import { useEffect } from "react";
import { useRhyddle } from "../hooks/useRhyddle";
import InputButtons from "./InputButtons";
import Info from "./Info";
import Grid from "./Grid";
import Hints from "./Hints";


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
        <h1>Rhyddle</h1>
        <Divider />
        <Info solution={solution}/>
        <Divider />
        <Hints solution={solution}/>
        <Divider />
        <Grid currentGuess={currentGuess} turn ={turn} guesses={guesses} solution={solution}/>        
        <Divider />
		<InputButtons/>
	</>);
}

function Divider(){
    return(<div>{Array(170).fill("-").join('')}</div>)
}


export default Rhyddle
