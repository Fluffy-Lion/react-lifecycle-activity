import React from "react"

class Clock extends React.Component {
  state = {
    date : new Date(),
  }
  seconds = 0
  componentDidMount() {
    // setInterval runs the code repeatedly
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
    console.log("mounted")
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  componentDidUpdate() {
    this.seconds += 1
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
        <div>
            <h1>hello world</h1>
            <h2>it is {this.state.date.toLocaleTimeString()}</h2>
            <h2>how many seconds have you been here for?: {this.seconds}</h2>
        </div>
    )
  }
}
export default Clock