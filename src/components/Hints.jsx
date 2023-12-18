import { useRhyddle } from "../hooks/useRhyddle";
import { useEffect } from "react";
import {v4} from "uuid"

function Hints({solution}) {
    const { handleHints, hintList} = useRhyddle(solution);
    
    useEffect(()=>{
        hintList.forEach((hint) => {
            const but = document.getElementById(hint.name);
            but.addEventListener("click", handleHints);
        })
    return() =>{
        hintList.forEach((hint) => {
            const but = document.getElementById(hint.name);
            but.removeEventListener("click", handleHints);
        })
    }}, [hintList]);

	return(<>
        <h3>Shop</h3>
        {hintList.map(hint => { //CURENTLY DOESN"T UPDATE, USE USE STATE!!!
            return(<div key={v4()}>
                {hint.getButton()} 
                {hint.showing ? hint.getInfo() : ""}
            </div>)
        })}
	</>);
}


export default Hints;
