import "../css/bars.css"
import { Bar } from "./Bar";
import {v4} from "uuid";

const sample = ['0.5', '0.5', '1', '1', '0.5r', '0.5', '0.5r', '0.5', '0.5r', '1', '0.5', '0.5', '0.5']

function Grid({currentGuess, turn, guesses, solution}) {
	return(<>
        {guesses.map((arr, index) => {
            if (index === turn){
                return(
                    <Bar current={true} guess={currentGuess} key={v4()} solution={solution}/>
                )  
            }
            else{
                return(
                    <Bar current={false} guess={arr} key={v4()} solution={solution}/>
                )
            }
        })}
	</>);
}

export default Grid;