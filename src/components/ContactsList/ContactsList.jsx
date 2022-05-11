import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';

export class ContactsList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <Contacts key={id} name={name} number={number} />
          ))}
        </ul>
      </>
    );
  }
}
