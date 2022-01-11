import React from "react"

class Clock extends React.Component {


  // componentWillUnmount() {
  //   clearInterval(this.timerID)
  // }



  
  render() {
    return (
        <div>
            <h1>hello world</h1>
            <h2>it is </h2>
            <h2>how many seconds have you been here for?: {this.seconds}</h2>
        </div>
    )
  }
}
export default Clock