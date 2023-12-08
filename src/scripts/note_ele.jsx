function NoteEle(length, left)
{   
    this.length = length;
    this.left = left;
    this.html=(<>ayo it broke</>);
    switch (length){
        case "2":
            this.html = (<div className="note-container" style={{left}}><div className="head unfilled" ></div><div className="stem" ></div></div>)
            break;
        case "1.5":
            this.html = (<div className="note-container" style={{left}}><div className="head" ></div><div className="stem" ></div><div className="dot" ></div></div>);
            break;
        case "1":
            this.html = (<div className="note-container" style={{left}}><div className="head" ></div><div className="stem" ></div></div>);
            break;
        case "0.5":
            this.html = (<div className="note-container" style={{left}}><div className="head" ></div><div className="stem" ></div><div className="tail" ></div></div>);
            break;
        case "0.25":
            this.html = (<div className="note-container" style={{left}}><div className="head" ></div><div className="stem"></div><div className="tail" ></div><div className="tail second" ></div></div>);
            break;
        case "2r":
            this.html = (<div className="note-container" style={{left}}><div className="block" ></div></div>);
            break;
        case "1.5r":
            break;
        case "1r":
            break;
        case "0.5r":
            break;
        case "0.25r":
            break;
        default:
            break;
    }
}

export default NoteEle;

