import React, { Component } from 'react'
import { connect } from 'react-redux'
import flv from 'flv.js'
import * as actions from '../../actions'

class StreamShow extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef()
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchStream(id)
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer()
  }

  buildPlayer() {
    // if already video player already exist, or stream does not exist,
    // return
    if (this.player || !this.props.stream) {
      return
    }

    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    })
    this.player.attachMediaElement(this.videoRef.current)
    this.player.load()
  }

  componentWillUnmount() {
    this.player.destroy()
}

  render() {
    const { stream } = this.props;
    if (stream) {
      return (
        <>
        <video ref={this.videoRef}
          style={{ width: "100%" }}
          controls />
        <h1>{stream.title}</h1>
        <p>{stream.description}</p>
        </>
    )} else {
      return (
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      )}
    }
}

function mapStateToProps({ streams }, ownProps) {
  return { stream: streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, actions)(StreamShow)
