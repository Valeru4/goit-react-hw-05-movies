export const SearchForm = ({ setSearchParams }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.target.name.value.trim();
    setSearchParams({
      query: searchValue,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Write your request"
          required
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
