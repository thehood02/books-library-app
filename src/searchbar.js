const SearchBar = () => {
    return (
      <div className="searchbar-container">
        <input
          className="input searchbar"
          type={"text"}
          placeholder="Search Book By Title or Author"
        />
      </div>
    );

}

export default SearchBar;