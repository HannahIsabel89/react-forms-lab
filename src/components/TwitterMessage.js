import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "", // need to first set the key/value pair in state
    };
  }

  messageWritten = event => {
    this.setState({
      message: event.target.value, // update the message to the event target
    });
  };

  render() {
    let rmnChars = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.messageWritten}
          value={this.state.message}
        />
        {rmnChars}
      </div>
    );
  }
}

export default TwitterMessage;
