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
        }
    }, [hintList, handleHints]);

	return(<>
        <h3>Hint Shop (Broken as of rn)</h3>
        <div style={{fontSize:14}}>
            <div>
            Reveal genre and description: FREE, always showing
            </div>
            <div>
            Reveal artist & year: 1 hint;
            </div>
            <div>
            Reveal song: 3 hints;
            </div>
            <div>
            Reveal number of notes: 1 hint;
            </div>
            <div>
            Reveal which notes are included: 1 hint;
            </div>
            <div>
            Last chance: leaves you with one guess left to transcribe the melody from ear
            </div>
        </div>
        {hintList.map(hint => { //CURENTLY DOESN"T UPDATE, USE USE STATE!!!
            return(<div key={v4()}>
                {hint.getButton()} 
                {hint.showing ? hint.getInfo() : ""}
            </div>)
        })}
	</>);
}


export default Hints;
