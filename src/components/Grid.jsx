import "../css/bars.css"
import { Bar } from "./Bar";
import {v4} from "uuid";

const sample = ['0.5', '0.5', '1', '1', '0.5r', '0.5', '0.5r', '0.5', '0.5r', '1', '0.5', '0.5', '0.5']

function Grid({currentGuess, turn, history}) {
    //USE GUESSES INSTEAD OF HISTORY TO ADD COLORS TO THE NOTES, RN ONLY TEMPORARY
	return(<>
        {history.map((arr, index) => {
            if (index === turn){
                return(
                    <Bar current={true} guess={currentGuess} key={v4()} />
                )  
            }
            else{
                return(
                    <Bar current={false} guess={arr} key={v4()} />
                )
            }
        })}
	</>);
}

export default Grid;