import React from "react";

class Bio extends React.Component {
    constructor() {
        super()
        this.state = {
            bio: "",
        }
    }
    changeGivenValueinUppercase(){
        this.setState({
            bio:this.state.bio.toUpperCase()
        })
    }

    changeTextAreaValue(value){
        this.setState({
            bio:value,
        })
    }

    render() {
        return (
            <div className="form-data">
                <h1>Please write your information here</h1>
                <textarea className="text" rows="20" cols="80" value={this.state.bio} onChange={(event)=>{this.changeTextAreaValue(event.target.value)}} >
                </textarea>
                <button type="submit" className="btn" onClick={()=>{this.changeGivenValueinUppercase()}}>Submit</button>
                <div value={this.state.bio} onChange={(event)=>{this.changeTextAreaValue(event.target.value)}}>
                <p className="page"></p>
                </div>
            </div>
        )
    }
}

export default Bio;