import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

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

  addContact = data => {
    const { contacts } = this.state;
    const { name, number } = data;
    const searchContact = contacts.some(contact => contact.name === data.name);
    searchContact
      ? alert(`${data.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [
            {
              id: nanoid(5),
              name,
              number,
            },
            ...contacts,
          ],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const lowerFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(lowerFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFiltredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList contacts={filteredContacts} />
      </>
    );
  }
}
