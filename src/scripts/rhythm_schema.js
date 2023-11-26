import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rhythm_schema = new Schema({
    notes: [{ length: {type:String}, pitch:{type:String}}],
    name: {type:String},
    year: {type:Number},
    artist: {type:String},
    note_count: {type:Number},
})

export {rhythm_schema};