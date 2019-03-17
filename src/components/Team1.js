import React from 'react'

class Team1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section className="team1">
        <section className="team-name">
          update team 1 name
          <input type="text" onBlur={this.props.handleChange1} />
          <button
            className="update-team-1-name"
            onClick={this.props.handleClick1}
          >
            Update
          </button>
        </section>
        <section>
          update team 1 score
          <button
            className="team-1-add-1-button"
            onClick={this.props.increaseScore}
          >
            add 1
          </button>
          <button
            className="team-1-subtract-1-button"
            onClick={this.props.decreaseScore}
          >
            subtract 1
          </button>
        </section>
      </section>
    )
  }
}

export default Team1
