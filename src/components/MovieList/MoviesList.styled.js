import styled from 'styled-components';

const MoviesList = styled.ul`
  margin-top: 15px;
  margin-left: 50px;
  margin-right: 50px;
`;

const MovieItem = styled.li`
  font-weight: 600;
  font-size: 30px;
  width: 100%;
  margin-bottom: 10px;
  background-color: #2a2a2a;
  border-radius: 15px;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  a:hover,
  a:focus {
    background-color: #01927c;
    color: #fff;
    border-radius: 15px;
    padding-top: 7px;
    padding-bottom: 7px;
  }

  a {
    display: block;
    padding: 16px 16px;
    color: #81e2df;
  }
`;

export { MoviesList, MovieItem };
