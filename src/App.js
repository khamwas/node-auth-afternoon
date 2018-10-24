import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get("/students")
      .then(response => this.setState({ students: response.data }));
  }

  render() {
    let display = this.state.students.map(elem => {
      return (
        <div key={elem.id}>
          <h1>
            {elem.student} -- Grade: {elem.current_grade}
          </h1>
          <h2>Email: {elem.email_address}</h2>
          <h2>Phone: {elem.phone}</h2>
        </div>
      );
    });
    return <div className="App">{display}</div>;
  }
}

export default App;
