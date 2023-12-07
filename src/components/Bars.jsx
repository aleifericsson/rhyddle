import "../css/bars.css"
import Note from "./Note";

function Bars() {
	return(<>
        <Bar current={false}></Bar>
	</>);
}

function Bar({current}){
    return((<div className="bar-container">
                <div className = {current ? "bar current" : "bar"}></div>
                <Note note_length="2" placement={0} bar={1}/>
                <Note note_length="1" placement={1} bar={1}/>
                <Note note_length="1" placement={2} bar={1}/>
                <div className = "vert-bar start"></div>
                <div className = "vert-bar mid"></div>
                <div className = "vert-bar end1"></div>
                <div className = "vert-bar end2"></div>
            </div>))
}

export default Bars;