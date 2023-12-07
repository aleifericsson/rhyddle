import NoteEle from "../scripts/note_ele";

function Note({note_length, placement, bar}) {
    let left;
    if (bar == 1){
        left = ((placement/16)*380+10).toString()+"px";
    }
    else{
        left = ((placement/16)*380+410).toString()+"px";
    }
    const note = new NoteEle(note_length,left)
	return(note.html);
}


export default Note;
