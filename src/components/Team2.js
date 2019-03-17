import React from 'react'

class Team2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section className="team2">
        <section className="team-name">
          update team 2 name
          <input type="text" onBlur={this.props.handleChange2} />
          <button
            className="update-team-2-name"
            onClick={this.props.handleClick2}
          >
            Update
          </button>
        </section>
        <section>
          update team 2 score
          <button
            className="team-1-add-2-button"
            onClick={this.props.increaseScore2}
          >
            add 1
          </button>
          <button
            className="team-1-subtract-2-button"
            onClick={this.props.decreaseScore2}
          >
            subtract 1
          </button>
        </section>
      </section>
    )
  }
}

export default Team2
