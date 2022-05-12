import PropTypes from 'prop-types';
import { ItemContact } from './Contacts.styled';
export const Contacts = ({ name, number, children }) => {
  return (
    <ItemContact>
      {name}: {number}
      {children}
    </ItemContact>
  );
};

Contacts.propType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  children: PropTypes.node,
};
