import { noteButtons, restButtons} from "../scripts/ui_classes";
import Backspace from "../assets/backspace.svg?react";
import Enter from "../assets/enter.svg?react";
import "../css/buttons.css";


function InputButtons() {
	return(<>
    {noteButtons.map(note => {
        return (note.generateButton());
    })}
    {restButtons.map(rest => {
        return (rest.generateButton())
    })}
    <button type="button" key = "backspace" className="NRButton" id="backspace"><Backspace /></button>
    <button type="button" key = "enter" className="NRButton" id="enter"><Enter /></button>
    </>);
}


export default InputButtons
