import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  font-size: 45px;
  margin-top: 25px;
  font-weight: 600;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

const Image = styled.img`
  max-width: 300px;
  background: #424242;
  border-radius: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 50px;
  padding: 50px;
  background-color: #333333;
  margin: 0 30px;
  border-radius: 5px;
`;

const StyledLink = styled.div`
  display: inline-block;
  padding: 5px;

  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 30px;
  font-weight: 600;
  margin-top: 5px;
  margin-left: 25px;

  &:hover,
  :focus {
    background-color: #01927c;
  }
`;

const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Text = styled.p`
  font-size: 22px;
`;
const TitleGenres = styled.h3`
  font-size: 22px;
`;

const MovieTitleOverview = styled.h2`
  font-size: 35px;
`;

export {
  Title,
  Image,
  Wrapper,
  StyledLink,
  WrapperImage,
  WrapperText,
  Text,
  MovieTitleOverview,
  TitleGenres,
};
