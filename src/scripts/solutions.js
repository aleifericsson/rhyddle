import { Guess, Solution } from "./rhythm_schema";

const solutions =[]

const generateSolution = (info,lengths,pitches)=> {
    //info: name, year, artist, genre, desc, bPM
    solutions.push(new Solution(info[0],info[1],info[2],info[3],info[4],info[5]))
    solutions[solutions.length-1].fillNotes(lengths,pitches);
}

generateSolution(["MEGALOVANIA", 2016, "Toby Fox","VGM, Electronic", "Melody of opening", 240]
    ,["0.5","0.5","1","1","0.5r","0.5","0.5r","0.5","0.5r","1","0.5","0.5","0.5","0.5"]
    ,["d4","d4","d5","a4","r","g#4","r", "g4", "r","f4","d4","f4","g4"])


const randomSolution = () => {
    return solutions[Math.floor(Math.random() * solutions.length)]
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

export {randomSolution, checkLength}