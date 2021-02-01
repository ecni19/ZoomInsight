import React from "react";
import firebase from "../firestore";

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      lectureNumber: "",
      message: "",
      time: "",
    };
  }
  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addMessage = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    console.log(this.state.message);
    console.log(this.state.time);
    db.collection("lecture1").add({
      message: this.state.message,
      time: this.state.time,
    });
    this.setState({
      lectureNumber: "",
      message: "",
      time: "",
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addMessage}>
          <input
            type="text"
            name="lecture"
            placeholder="Lecture #"
            onChange={this.updateInput}
            value={this.state.lectureNumber}
          />
          <input
            type="text"
            name="message"
            placeholder="message"
            onChange={this.updateInput}
            value={this.state.message}
          />
          <input
            type="text"
            name="time"
            placeholder="time"
            onChange={this.updateInput}
            value={this.state.time}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Chat;
