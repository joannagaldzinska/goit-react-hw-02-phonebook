import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleFormChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { onAdd } = this.props;

    this.reset();

    return onAdd({ id: uuidv4(), name, number });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleFormChange}
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          value={number}
          onChange={this.handleFormChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
