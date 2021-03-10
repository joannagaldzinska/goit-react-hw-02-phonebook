import PropTypes from 'prop-types';

const FindContactByName = ({ filter, onChange }) => {
  return (
    <>
      <h2>Find contact by name</h2>
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="Enter name"
        onChange={({ target }) => onChange(target.value)}
      />
    </>
  );
};

FindContactByName.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.string,
};

export default FindContactByName;
