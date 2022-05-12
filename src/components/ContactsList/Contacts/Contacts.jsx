import { DeleteBtn } from '../DeleteBtn/DeleteBtn';
export const Contacts = ({ name, number }) => {
  return (
    <li>
      {name}: {number}
      <DeleteBtn />
    </li>
  );
};
