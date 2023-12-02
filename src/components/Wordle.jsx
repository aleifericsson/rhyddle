import { useEffect } from "react";
import { useRhyddle } from "../hooks/useRhyddle";
import InputButtons from "./InputButtons";
import Info from "./Info";


function Rhyddle({solution}) {
    const {currentGuess, handleInput} = useRhyddle(solution);

    useEffect(()=>{
        const NRButtons = document.querySelectorAll(".NRButton");
        NRButtons.forEach(button => {
            button.addEventListener("click", handleInput);
        })

        return() => {
            NRButtons.forEach(button => {
                button.addEventListener("click", handleInput);
            })
        }
    }, [handleInput])

	return(<>
		<InputButtons/>
        <Info solution={solution}/>
        <h3>Current Guess: {currentGuess}</h3>
	</>);
}


export default Rhyddle
