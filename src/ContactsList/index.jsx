const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li key={id}>
      {name}: {number} <button onClick={() => onRemove(id)}>remove</button>
    </li>
  );
};

const ContactsList = ({ contacts, onRemove }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ContactsList;
