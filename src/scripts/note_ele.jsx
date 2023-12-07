function NoteEle(length, left)
{   
    this.length = length;
    this.left = left;
    this.html=(<>ayo it broke</>);
    switch (length){
        case "2":
            this.html = (<div className="note-container"><div className="head unfilled" style={{left}}></div><div className="stem" style={{left}}></div></div>)
            break;
        case "1.5":
            break;
        case "1":
            this.html = (<div className="note-container"><div className="head" style={{left}}></div><div className="stem" style={{left}}></div></div>);
            break;
        case "0.5":
            break;
        case "0.25":
            break;
        case "2r":
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

