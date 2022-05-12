export const DeleteBtn = ({ onDeleteContact, key }) => {
  return (
    <button onClick={() => onDeleteContact(key)} type="button">
      Delete
    </button>
  );
};
