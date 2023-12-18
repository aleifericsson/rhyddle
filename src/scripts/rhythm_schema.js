/*
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rhythm_schema = new Schema({
    notes: [{ length: {type:String}, pitch:{type:String}}],
    name: {type:String},
    genre: {type:String}, //e.g. VGM, electronic
    year: {type:Number},
    desc: {type:Number}, //e.g. bass of chorus, melody of first verse
    artist: {type:String},
    BPM: {type:Number},
    note_count: {type:Number},
})
*/

function Solution(name,year,artist,genre,desc,bPM){
    this.name=name;
    this.year=year;
    this.artist=artist;
    this.genre = genre; //e.g. VGM, electronic
    this.desc = desc; //e.g. bass of chorus, melody of first verse
    this.notes = [];
    this.simple_notes = [];
    this.note_count=0;
    this.bPM=bPM;
    this.addNote = function(length,pitch){//notes in rhyths have pitch, notes in guess do not
        this.note_count += 1;
        this.notes.push({length,pitch});//assumes rests have pitch of "r"
    }
    this.fillNotes = function(note_arr, pitches){
        for(let i = 0; i<note_arr.length; i++){
            this.note_count += 1;
            this.notes.push({length:note_arr[i],pitch:pitches[i]})
        }
    }
    this.simplifyNotes = function(){
        this.simple_notes = this.notes.map(note => note.length);
    }
    this.playSolution = function(){//plays with pitch

    }
}

function Guess(raw_notes){
    this.raw_notes = raw_notes;
    this.formatted_notes = []; //Note Order mode
    this.formatted_notes2 = []; //Note Placement Mode
    this.hint_guess = false; //hint guess are blocked out for hints
    this.addNote = function(length){//notes in rhyths have pitch, notes in guess do not
        this.note_count += 1;
        this.notes.push({length});
    }
    this.formatNotes = function(solution){
        //green: note is right length + order
            //yellow: note length exists in rhythm somewhere, grey if e.g. 4 quavers are put when there are only 3
            //grey: note length does not exist in it
        solution.simplifyNotes();
        const sol_notes = solution.simple_notes;
        this.formatted_notes = this.raw_notes.map((note) => {
            return {length:note,colour:"grey"}
        });
        this.formatted_notes.forEach((note,index)=>{
            if (note.length===sol_notes[index]){
                this.formatted_notes[index].colour = "green"
            }
        })
        this.formatted_notes.forEach((note,index)=>{
            const sol_note_len = sol_notes.filter(e => e === note.length).length;
            if(sol_note_len > 0){
                if(this.formatted_notes[index].colour !== "green"){
                    if(sol_note_len === this.formatted_notes.filter(e => e.length === note.length && (e.colour === "yellow" || e.colour === "green")).length){
                        this.formatted_notes[index].colour = "grey";
                    }
                    else{
                        this.formatted_notes[index].colour = "yellow";
                    }
                }
            }
        })
        this.formatted_notes2 = this.raw_notes.map((note)=>{
            return{length:note, colour:"grey"}
        })

    }
    this.playGuess = function(){//plays the guess with claps ig

    }
    this.setHintGuess = function(){
        this.raw_notes = Array(16).fill("x");
        this.formatted_notes = Array(16).fill({length:"x",colour:"x"}); //triggers something so that the ui would show something different
        this.formatted_notes2 = Array(16).fill({length:"x",colour:"x"});
        this.hint_guess = true;
    }
}


export {Solution, Guess};