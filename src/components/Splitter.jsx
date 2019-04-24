import React from 'react';
import AddFriendForm from './AddFriendForm';
import CalculationArea from './CalculationArea';

class Splitter extends React.Component {
  constructor() {
    super();
    this.state = {
      nameOfEvent: '',
      nameOfFriend: '',
      payt: '',
      friends: [],
      errors: [],
      isEventInputDisabled: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'number' ? target.value : toCapitalize(target.value);
    
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
      errors: [],
      isEventInputDisabled: true
    }); 
  }

  handleReset() {
    this.setState({
      nameOfEvent: '',
      nameOfFriend: ''  ,
      payt: '',
      friends: [],
      errors: [],
      isEventInputDisabled: false,
    });
  }

  render() {
    return (
      <div className='container'>
        <AddFriendForm
          handleChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          handleReset={this.handleReset}
          payt={this.state.payt}
          nameOfFriend={this.state.nameOfFriend}
          nameOfEvent={this.state.nameOfEvent}
          errors={this.state.errors}
          isEventInputDisabled={this.state.isEventInputDisabled}
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

  if (payt === '' || parseFloat(payt) === 0) {
    errors.push("❌ Payment must be more than '0'");
  }

  return errors;
}

function toCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Splitter;