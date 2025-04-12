import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  componentDidMount() {}

  render() {
    const { name, bio } = this.props;
    const { count, count2 } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h2>Username: Rohan2003</h2>
        <h2>{bio}</h2>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default UserClass;
