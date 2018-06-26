import React, { Component } from "react";
import Profile from "./Profile/Profile";
import City1 from "./City1/City1";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Contents">
          <Profile
            src="https://lumiere-a.akamaihd.net/v1/images/tmb-sq_character-donald-duck_launch_7494d3f2.jpeg?width=600"
            name="Donald Duck"
            roles={["Duck", "Bird", "Disney Character", "Mickey's Friend"]}
          />
          <City1 name="Amsterdam" country="Netherlands" />
        </div>
      </div>
    );
  }
}

export default App;
