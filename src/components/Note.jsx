const note_list=[
    {length:"2",shape:(<><div className="head unfilled"></div><div className="stem"></div></>)},
    {length:"1",shape:(<><div className="head"></div><div className="stem"></div></>)},
]

function Note({note_length, placement}) {
    const percent = ((placement/16)*100).toString()+"px";
    const note = note_list.filter(note => {return note.length === note_length});
	return(note[0].shape);
}


export default Note;
