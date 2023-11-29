function NRButton(length,type){
    this.length = length; //string
    this.type = type; // either note or rest
    this.name = this.length + (type === "rest" ? "r" : "");
    this.disabled = false;
    this.highlighted = false;

    this.generateButton = () => {
        return(<button key = {this.name} className="NRButton" id={this.name}>{this.name}</button>)
    }
}

const notes = ["2","1.5","1","0.75","0.5", "0.25"];
const rests = ["2","1.5","1","0.75","0.5", "0.25"];
const noteButtons = notes.map(note=>{return(new NRButton(note,"note"))});
const restButtons = rests.map(rest=>{return(new NRButton(rest,"rest"))});


export { noteButtons, restButtons};