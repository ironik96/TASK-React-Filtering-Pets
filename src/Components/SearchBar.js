function SearchBar(props) {
  return (
    <div className="input-group rounded">
      <input
        type="search"
        onChange={(event) => props.setQuery(event.target.value)}
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </div>
  );
}

export default SearchBar;
