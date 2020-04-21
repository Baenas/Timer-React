import React, { Component } from "react";
import "../App.css";


class Display extends Component{

    render() {
        return(
            <div className="display">
                <span> {this.props.display} </span>
            </div>
        )
    }
}

export default Display