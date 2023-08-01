import { Button, Form, Input, Wrapper } from './SearchForm.styled';

const SearchForm = ({ setSearchParams }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.target.name.value.trim();
    setSearchParams({
      query: searchValue,
    });
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Write your request"
          required
        ></Input>
        <Button type="submit">Search</Button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
