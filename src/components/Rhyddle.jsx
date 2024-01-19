import { useEffect } from "react";
import { useRhyddle } from "../hooks/useRhyddle";
import InputButtons from "./InputButtons";
import Info from "./Info";
import Grid from "./Grid";
import Hints from "./Hints";
import WinCond from "./WinCond";

function Rhyddle({solution}) {
    const { handleInput, currentGuess, turn, guesses, isCorrect} = useRhyddle(solution);

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
        <h3>by Alif Nafili</h3>
        <div>
        <div>Welcome to Rhyddle!</div>
        <div>Unfortunately, this project is being discontinued for the time being, but there is one singular song loaded in the system, so feel free to have a guess!</div>
        <div>Everything except the rhythm player, hint shop, song database and css is finished.</div>
        </div>
        <Divider />
        <Info solution={solution}/>
        <Divider />
        <Hints solution={solution}/>
        <Divider />

        <WinCond win={isCorrect} />
		<InputButtons/>
        <Grid currentGuess={currentGuess} turn ={turn} guesses={guesses} solution={solution}/>  
	</>);
}

function Divider(){
    return(<div>{Array(170).fill("-").join('')}</div>)
}


export default Rhyddle
