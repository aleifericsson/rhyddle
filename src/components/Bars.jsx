import "../css/bars.css"
import Note from "./Note";

function Bars() {
	return(<>
        <Bar current={false}></Bar>
        <Bar current={true}></Bar>
	</>);
}

function Bar({current}){
    return((<div className = "guess-container">
                <div className="bar-container">
                    <div className = {current ? "bar current" : "bar"}></div>
                    <Note note_length="2" placement={0} bar={1}/>
                    <Note note_length="1.5" placement={1} bar={1}/>
                    <Note note_length="1" placement={2} bar={1}/>
                    <Note note_length="0.5" placement={3} bar={1}/>
                    <Note note_length="0.25" placement={4} bar={1}/>
                    <Note note_length="1.5" placement={5} bar={1}/>
                    <Note note_length="0.75" placement={12} bar={1}/>
                    <Note note_length="1.5" placement={4} bar={2}/>
                    <Note note_length="2r" placement={5} bar={2}/>
                    <Note note_length="0.5" placement={6} bar={2}/>
                    <Note note_length="1.5r" placement={7} bar={2}/>
                    <Note note_length="1r" placement={8} bar={2}/>
                    <Note note_length="0.5r" placement={9} bar={2}/>
                    <Note note_length="0.25r" placement={10} bar={2}/>
                    <Note note_length="0.75r" placement={11} bar={2}/>
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