import React from 'react';

class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {total: 0};
  }

  render() {
    let total = this.propsfriends.reduce((sum, friend) =>
      sum + friend.paid);
      this.setState({
        total: total
      });
      return {this.state.total};
  }
}

export default Total;