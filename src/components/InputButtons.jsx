import { noteButtons, restButtons} from "../scripts/ui_classes";

function InputButtons() {
	return(<>
    {noteButtons.map(note => {
        return (note.generateButton());
    })}
    {restButtons.map(rest => {
        return (rest.generateButton())
    })}
    <button key = "backspace" className="NRButton" id="backspace">backspace</button>
    <button key = "enter" className="NRButton" id="enter">enter</button>
    </>);
}


export default InputButtons
