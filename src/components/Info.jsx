import { useRhyddle } from "../hooks/useRhyddle";
import { useEffect } from "react";

function Info({solution}) {
        const { viewMode, toggleMode} = useRhyddle(solution);

        useEffect(()=>{
                const toggle_button = document.querySelector("#toggle-mode");
                toggle_button.addEventListener("click", toggleMode)
        
                return() => {
                    toggle_button.removeEventListener("click", toggleMode);
                    
                }
            }, [toggleMode])

	return(<>
        <div>Genre: {solution.genre}</div>
        <div>Description: {solution.desc}</div>
        <div>BPM: {solution.bPM}</div>

        <button type="button" id = "toggle-mode">Toggle Mode</button>
        <div>Current Mode: {viewMode}</div>
	</>);
}


export default Info;
