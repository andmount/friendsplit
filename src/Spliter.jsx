import React from 'react'

class Splitter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfEvent: null,
      nameOfFriend: null,
      total: null,
      paid: null,
      currency: 'USD',
      friends: [{
        name: this.state.nameOfFriend,
        paid: this.state.paid
      }] 
    };
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({
      [name]: value
    });
    }
  }

  render () {
    return (
      <div className='container'>
        <AddFriendForm />
        <CalculationArea />
      </div>
    );
  }
}

export default Splitter;