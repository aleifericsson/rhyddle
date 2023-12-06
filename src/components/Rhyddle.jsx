import { useEffect } from "react";
import { useRhyddle } from "../hooks/useRhyddle";
import InputButtons from "./InputButtons";
import Info from "./Info";
import Bars from "./Bars";


function Rhyddle({solution}) {
    const {currentGuess, handleInput} = useRhyddle(solution);

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
        <Bars/>
        <Info solution={solution}/>
		<InputButtons/>
	</>);
}


export default Rhyddle
