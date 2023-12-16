import { useRhyddle } from "../hooks/useRhyddle";
import { useEffect } from "react";
import {v4} from "uuid"

function Hints({solution}) {
        const { handleHints, hintList} = useRhyddle(solution);

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
