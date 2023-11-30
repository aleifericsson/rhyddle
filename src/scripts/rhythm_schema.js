import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rhythm_schema = new Schema({
    notes: [{ length: {type:String}, pitch:{type:String}}],
    name: {type:String},
    genre: {type:String},
    year: {type:Number},
    desc: {type:Number},
    artist: {type:String},
    note_count: {type:Number},
})

function Solution(name,year,artist,genre,desc){
    this.name=name;
    this.year=year;
    this.artist=artist;
    this.genre = genre;
    this.desc = desc; //e.g. bass of chorus, melody of first verse
    this.notes = [];
    this.note_count=0;
    this.addNote = function(length,pitch){//notes in rhyths have pitch, notes in guess do not
        this.note_count += 1;
        this.notes.push({length,pitch});
    }
    this.playSolution = function(){//plays with putch

    }
}

function Guess(raw_notes){
    this.raw_notes = raw_notes;
    this.formatted_notes = [];
    this.hint_guess = false; //hint guess are blocked out for hints
    this.addNote = function(length){//notes in rhyths have pitch, notes in guess do not
        this.note_count += 1;
        this.notes.push({length});
    }
    this.formatNotes = function(){
        this.formatted_notes = this.raw_notes.map(note => {
            //green: note is right length + order
            //yellow: note length exists in rhythm somewhere, grey if e.g. 4 quavers are put when there are only 3
            //grey: note length does not exist in it
            return {length:note.length,colour:""}
        });

    }
    this.playGuess = function(){//plays the guess with claps ig

    }
    this.sethintGuess = function(){
        this.raw_notes = [];
        this.formatted_notes = "X"; //triggers something so that the ui would show something different
        this.hint_guess = true;
    }
}


export {rhythm_schema, Solution, Guess};