function Selector(props) {
  return (
    <select
      onChange={(event) => props.setType(event.target.value)}
      className="form-select"
    >
      <option value="" selected>
        All
      </option>
      <option value="Cat">Cat</option>
      <option value="Dog">Dog</option>
      <option value="Rabbit">Rabbit</option>
    </select>
  );
}

export default Selector;
