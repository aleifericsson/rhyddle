
const generateSolution = () => {
    return ["2","2r","1","1r","2r"]
}

const checkLength = (note_arr) => {
    let tot_len = 0;
    note_arr.forEach(note => {
        let temp = note;
        if(note.endsWith("r")){
            temp = note.slice(0, -1);
        }
        tot_len = tot_len + Number(temp);
    });
    console.log(tot_len);
    return(tot_len);
}

export {generateSolution, checkLength}