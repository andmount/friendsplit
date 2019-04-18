import React from 'react';
import AddFriendForm from './AddFriendForm';
import CalculationArea from './CalculationArea';

class Splitter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfEvent: '',
      nameOfFriend: '',
      payt: '',
      friends: [] 
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const friends = this.state.friends;
    const name = this.state.nameOfFriend;
    const payt = this.state.payt;
    this.setState({
      friends: friends.concat([{ name: name, payt: +payt}])
    });
    this.setState({
      nameOfFriend: '',
      payt: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className='container'>
        <AddFriendForm
          handleChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          payt={this.state.payt}
          nameOfFriend={this.state.nameOfFriend}
        />
        <CalculationArea 
          event={this.state.nameOfEvent}
          friends={this.state.friends}
        />
      </div>
    );
  }
}
function validate() {
  
}

export default Splitter;