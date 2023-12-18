function Hint(name,cost){
    this.showing = false;
    this.name = name;
    this.cost = cost;
    this.getButton = () => {
        return(
            <button className="hint-button" id={this.name} >{this.name}</button>
        )
    }
    this.getInfo = () => {
        return(
            <div>i am enabled</div>
        )
    }
}

const hint_list = [new Hint("hint-test",1)];

export {Hint, hint_list};