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
      friends: [],
      errors: []
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
    event.preventDefault();

    const { nameOfFriend, nameOfEvent, payt, friends } = this.state;
    const errors = validate(nameOfEvent, nameOfFriend, payt, friends);

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    this.setState({
      friends: friends.concat([{ name: nameOfFriend, payt: +payt}])
    });
    this.setState({
      nameOfFriend: '',
      payt: '',
      errors: []
    });
    
  }

  render() {
    return (
      <div className='container'>
        <AddFriendForm
          handleChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          payt={this.state.payt}
          nameOfFriend={this.state.nameOfFriend}
          errors={this.state.errors}
        />
        <CalculationArea 
          event={this.state.nameOfEvent}
          friends={this.state.friends}
        />
      </div>
    );
  }
}


function validate(nameOfEvent, nameOfFriend, payt, friends) {
  const errors = [];

  if (nameOfEvent.length === 0) {
    errors.push("❌ Name of event can't be empty");
  }

  if (nameOfFriend.length === 0) {
    errors.push("❌ Name of friend can't be empty");
  }

  if (friends.filter(friend => friend.name === nameOfFriend).length > 0) {
    errors.push("❌ This name of friend already exist");
  }

  if (!(isNaN(parseInt(nameOfFriend)))) {
    errors.push("❌ Name of friend can't start from digit");
  }

  if (payt === '' || payt === '0') {
    errors.push("❌ Payment must be more than '0'");
  }

  return errors;
}

export default Splitter;