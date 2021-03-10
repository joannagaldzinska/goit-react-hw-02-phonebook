import PropTypes from 'prop-types';

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

ContactsList.propTypes = {
  id: PropTypes.string,
  contacts: PropTypes.array,
  onRemove: PropTypes.func.isRequired,
  number: PropTypes.string,
  name: PropTypes.string,
};

export default ContactsList;
