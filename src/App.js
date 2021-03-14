// import PropTypes from 'prop-types';
import { Component } from 'react';
import Form from './Form';
import ContactsList from './ContactsList';
import FindContactByName from './FindContactByName';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  resetField = name => {
    return ({ name } = '');
  };

  handleNewContact = newContact =>
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));

  handleRemoveItem = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFindContact = filter => this.setState({ filter });

  showFilteredContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('contacts updated, and saved in local storage');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  render() {
    const { filter } = this.state;
    const filteredContact = this.showFilteredContact();
    return (
      <>
        <h1>Phonebook</h1>
        <Form onAdd={this.handleNewContact} />
        <h1>Contacts</h1>
        <FindContactByName filter={filter} onChange={this.handleFindContact} />
        <ContactsList
          contacts={filteredContact}
          onRemove={this.handleRemoveItem}
        />
      </>
    );
  }
}
