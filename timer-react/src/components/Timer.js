import React, { Component } from "react";
import Button from "../components/Buttons";
import Display from "../components/Display";
class Timer extends Component {
  state = {
    timer:`00 : 00 :  00`,
    h: 0,
    m:0,
    s: 0,
    incr: 1,

  };

  tick = () => {
    
    let { h, m, s , incr} = this.state;
      if (m < 10) m = "0" + m.toString();
        if (h< 10) h = "0" + h.toString();
    if (s <= 59) {
         
      this.setState({
        s: (s += 1 * incr ),
      });
      if (s < 10) s = "0" + s.toString();
      
    }

    if (s > 59) {
      this.setState({
        s: (s = 0),
        m: (m += 1  * incr  ),
      });
      if (m < 10) m = "0" + m.toString();
      
    }
    if (m > 59) {
      this.setState({
        s: (s = 0),
        m: (m = 0),
        h: (h += 1  * incr ),
      });
    }
    if (h === 24) {
    }

    this.setState({
      timer: `${h} :  ${m} :  ${s}`,
    });
  };

  HandleStop = () => {
    clearInterval(this.interval);
  };
  HandleReset = () => {
   
    this.setState({
     h:0,
     m:0,
     s:0,
      timer: `00 : 00 :  00`,
    });
     clearInterval(this.interval);
  };
  HandleStart = () => {
    let { h, m, s } = this.state;

    this.setState({
      timer: `${h} :  ${m} :  ${s}`,
    });

    this.interval = setInterval(this.tick, 1000);
  };

  HandleFaster = () => {
this.setState({
    incr: this.state.incr *  5
})
  }
  HandleNormal = () => {
this.setState({
    incr: 1,
 
})

}
  render() {
    const { timer } = this.state;
    return (
      <div>
        <Button class="button" HandleClick={this.HandleStart} text="Start" />
        <Display display={timer} />
        <Button class="button" HandleClick={this.HandleStop} text="Stop" />
        <div className="botombar">
          <Button
            class="buttonsmall"
            HandleClick={this.HandleReset}
            text="Reset"
          />
          <Button class="buttonsmall" HandleClick={this.HandleFaster} text="Faster" />

          <Button class="buttonsmall" HandleClick={this.HandleNormal} text="Normal" />
        </div>
          <div className="botombar">
       
        
        </div>
      </div>
    );
  }
}

export default Timer;
