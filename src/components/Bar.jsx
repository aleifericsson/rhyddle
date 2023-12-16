import {v4} from "uuid";
import Note from "./Note";
import { useRhyddle } from "../hooks/useRhyddle";

function Bar({current, guess, solution}){
    const { viewMode } = useRhyddle(solution);

    if(current || guess.length == 0){
    let length_calc = [0];
    guess.forEach(note => {
        let leng = note;
        if (leng.endsWith("r")){
            leng = leng.slice(0,-1);
        }
        leng = parseFloat(leng/0.25);
        length_calc.push(leng+length_calc[length_calc.length-1]);
    });
    return((<div  className = "guess-container">
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
    else{
        let length_calc = [0];
        guess.raw_notes.forEach(note => {
        let leng = note;
        if (leng.endsWith("r")){
            leng = leng.slice(0,-1);
        }
        leng = parseFloat(leng/0.25);
        length_calc.push(leng+length_calc[length_calc.length-1]);
    });
    return((<div  className = "guess-container">
                <div className="bar-container">
                    <div className = {current ? "bar current" : "bar"}></div>
                    {guess.raw_notes.map((note, index)=>{
                        let bra = 1;
                        let place = length_calc[index]
                        if (place > 15){
                            bra = 2;
                            place = place-15;
                        }
                        let colour;
                        const temp = document.querySelector(".view-mode");
                        if(temp.innerHTML === "Note Order"){
                            colour = guess.formatted_notes[index].colour;
                        }
                        else{
                            colour=guess.formatted_notes2[index].colour;
                        }
                        if (colour =="green"){
                            colour = "rgba(0,255,0,0.3)";
                        }
                        else if (colour =="yellow"){
                            colour = "rgba(255,255,0,0.3)";
                        }
                        else{
                            colour = "rgba(50,50,50,0.3)";
                        }
                        let left;
                        if (bra == 1){
                            left = ((place/16)*380+10+8).toString()+"px";
                        }
                        else{
                            left = ((place/16)*380+380+8).toString()+"px";
                        }
                        return(
                            <div key={v4()}>
                            
                            <div className="highlight" style={{backgroundColor:colour, left}}></div>
                            <Note note_length={note} placement={place} bar={bra} key={v4()}/>
                            </div>
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
}

export {Bar};