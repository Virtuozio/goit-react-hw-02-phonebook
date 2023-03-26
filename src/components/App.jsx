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
    this.setState(prev => {
      // if (prev.contacts.map(contact => { contact.name })) {
      //   return;
      // }
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
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleChange={this.handleChange}
          handleCreate={this.handleCreate}
        />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleChange={this.handleChange} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
