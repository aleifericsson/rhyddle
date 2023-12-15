import CrotchetR from "../assets/crotchet_rest.svg?react";
import QuaverR from "../assets/quaver_rest.svg?react";
import SemiQR from "../assets/semiquaver_rest.svg?react";
function NoteEle(length, left, key)
{   
    this.length = length;
    this.left = left;
    this.html=(<>ayo it broke</>);
    switch (length){
        case "2":
            this.html = (<div className="note-container" key={key} style={{left}}><div className="head unfilled" ></div><div className="stem" ></div></div>)
            break;
        case "1.5":
            this.html = (<div className="note-container" key={key} style={{left}}><div className="head" ></div><div className="stem" ></div><div className="dot" ></div></div>);
            break;
        case "1":
            this.html = (<div className="note-container" key={key} style={{left}}><div className="head" ></div><div className="stem" ></div></div>);
            break;
        case "0.75":
            this.html = (<div className="note-container" key={key} style={{left}}><div className="head" ></div><div className="stem" ></div><div className="tail" ><div className="dot weird" ></div></div></div>);
            break;
        case "0.5":
            this.html = (<div className="note-container" key={key} style={{left}}><div className="head" ></div><div className="stem" ></div><div className="tail" ></div></div>);
            break;
        case "0.25":
            this.html = (<div className="note-container" key={key} style={{left}}><div className="head" ></div><div className="stem"></div><div className="tail" ></div><div className="tail second" ></div></div>);
            break;
        case "2r":
            this.html = (<div className="note-container rest" key={key} style={{left}}><div className="block" ></div></div>);
            break;
        case "1.5r":
            this.html=(<div className="note-container rest" key={key} style={{left, transform:"translate(0,14px)"}}><CrotchetR /><div className="dot"></div></div>)
            break;
        case "1r":
            this.html=(<div className="note-container rest" key={key} style={{left, transform:"translate(0,14px)"}}><CrotchetR /></div>)
            break;
        case "0.75r":
            this.html=(<div className="note-container rest" key={key} style={{left, transform:"translate(0,12px)"}}><QuaverR /><div className="dot" ></div></div>)
            break;
        case "0.5r":
            this.html=(<div className="note-container rest" key={key} style={{left, transform:"translate(0,12px)"}}><QuaverR /></div>)
            break;
        case "0.25r":
            this.html=(<div className="note-container rest" key={key} style={{left, transform:"translate(0,8px)"}}><SemiQR /></div>)
            break;
        default:
            break;
    }
}

export default NoteEle;

