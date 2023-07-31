import { Button, Input, Wrapper } from './SearchForm.styled';

export const SearchForm = ({ setSearchParams }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.target.name.value.trim();
    setSearchParams({
      query: searchValue,
    });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Write your request"
          required
        ></Input>
        <Button type="submit">Search</Button>
      </form>
    </Wrapper>
  );
};
