import "../css/bars.css"
import Note from "./Note";
import {v4} from "uuid";

const sample = ['0.5', '0.5', '1', '1', '0.5r', '0.5', '0.5r', '0.5', '0.5r', '1', '0.5', '0.5', '0.5']

function Bars() {
	return(<>
        <Bar current={true} guess={sample}></Bar>
	</>);
}

function Bar({current, guess}){
    let length_calc = [0];
    guess.forEach(note => {
        let leng = note;
        if (leng.endsWith("r")){
            leng = leng.slice(0,-1);
        }
        leng = parseFloat(leng/0.25);
        length_calc.push(leng+length_calc[length_calc.length-1]);
    });
    return((<div className = "guess-container">
                <div className="bar-container">
                    <div className = {current ? "bar current" : "bar"}></div>
                    {guess.map((note, index)=>{
                        let bra = 1;
                        let place = length_calc[index]
                        if (place > 15){
                            bra = 2;
                            place = place-15;
                        }
                        return(
                            <Note note_length={note} placement={place} bar={bra} key={v4()}/>
                        )
                    })}
                    <div className = "vert-bar start"></div>
                    <div className = "vert-bar mid"></div>
                    <div className = "vert-bar end1"></div>
                    <div className = "vert-bar end2"></div>
                </div>
                <button type="button" key = "play" className="guess-button" id="play">play guess</button>
                <div>{current ? "current" : "not current"}</div>
            </div>))
}

export default Bars;