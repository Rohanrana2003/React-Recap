import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        name: "Dummy",
        bio: "bio",
      },
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/Rohanrana2003");
    const data = await response.json();
    this.setState({
      userInfo: data,
    });
  }

  render() {
    const { name, bio } = this.state.userInfo;
    return (
      <div>
        <User name={name} bio={bio} />
        <UserClass name={name} bio={bio} />
      </div>
    );
  }
}

export default About;
