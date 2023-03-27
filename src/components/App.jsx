import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleCreate = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const names = this.state.contacts.map(contact => contact.name);
    if (names.includes(this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
      return;
    }
    this.setState(prev => {
      return {
        contacts: [
          ...prev.contacts,
          {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number,
          },
        ],
      };
    });
    form.reset();
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  deleteContact = ({ target }) => {
    const index = this.state.contacts.findIndex(
      contact => contact.id === target.id
    );
    console.log(index);
    this.state.contacts.splice(index, 1);
    this.setState({
      contacts: this.state.contacts,
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onChange={this.handleChange}
          onAddContact={this.handleCreate}
        />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleChange} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteBtn={this.deleteContact}
        />
      </div>
    );
  }
}
