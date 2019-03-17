import React from 'react'

class Score extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section className="score-area">
        <section className="team1">
          <h2>{this.props.teamName1}</h2>
          <p className="team1Score">{this.props.score}</p>
        </section>
        <section className="team2">
          <h2>{this.props.teamName2}</h2>
          <p className="team2Score">{this.props.score2}</p>
        </section>
      </section>
    )
  }
}

export default Score
