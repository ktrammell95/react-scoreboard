import React, { Component } from 'react'
import './screen.css'
import Score from './components/Score'
import Team1 from './components/Team1'
import Team2 from './components/Team2'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      score2: 0,
      teamName1: 'Team 1',
      teamName2: 'Team 2'
    }
  }

  handleChange1 = event => {
    this.setState({ teamName1: event.target.value })
  }

  handleClick1 = event => {
    console.log('A name was submitted: ' + this.state.teamName1)
    event.preventDefault()
  }

  handleChange2 = event => {
    this.setState({ teamName2: event.target.value })
  }

  handleClick2 = event => {
    console.log('A name was submitted: ' + this.state.teamName2)
    event.preventDefault()
  }

  increaseScore = () => {
    this.setState({ score: this.state.score + 1 })
    console.log('score: ' + this.state.score)
  }

  increaseScore2 = () => {
    this.setState({ score2: this.state.score2 + 1 })
    console.log('score2: ' + this.state.score2)
  }

  decreaseScore = () => {
    if (this.state.score >= 1) {
      this.setState({ score: this.state.score - 1 })
    } else {
      this.setState({ score: 0 })
    }
    console.log('score: ' + this.state.score)
  }

  decreaseScore2 = () => {
    if (this.state.score2 >= 1) {
      this.setState({ score2: this.state.score2 - 1 })
    } else {
      this.setState({ score2: 0 })
    }
    console.log('score2: ' + this.state.score2)
  }

  render() {
    return (
      <div className="App">
        <h1>My Score Board</h1>
        <Score
          score={this.state.score}
          score2={this.state.score2}
          teamName1={this.state.teamName1}
          teamName2={this.state.teamName2}
        />
        <section className="update-score">
          <Team1
            handleClick1={this.handleClick1}
            handleChange1={this.handleChange1}
            increaseScore={this.increaseScore}
            decreaseScore={this.decreaseScore}
          />
          <Team2
            handleClick2={this.handleClick2}
            handleChange2={this.handleChange2}
            increaseScore2={this.increaseScore2}
            decreaseScore2={this.decreaseScore2}
          />
        </section>
      </div>
    )
  }
}

export default App
