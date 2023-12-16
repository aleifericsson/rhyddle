function Hint(name,cost){
    this.showing = false;
    this.name = name;
    this.cost = cost;
    this.getButton = () => {
        return(
            <button className="hint-button" onClick={this.clickFunc}>{this.name}</button>
        )
    }
    this.clickFunc = () =>{
        if (this.showing === false) //ensures only pressed once
        {
            console.log(this.name);
            this.showing = true
            //if name == something do something extra
        }
    }
    this.getInfo = () => {
        return(
            <div>i am enabled</div>
        )
    }
}

const hint_list = [new Hint("test",1)];

export {Hint, hint_list};