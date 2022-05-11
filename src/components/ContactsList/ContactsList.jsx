import { Component } from 'react';

export class ContactsList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
