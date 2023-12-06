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
                <Note note_length="2" placement={5}/>
            </div>))
}

export default Bars;