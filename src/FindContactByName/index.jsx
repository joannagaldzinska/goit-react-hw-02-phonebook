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

export default FindContactByName;
