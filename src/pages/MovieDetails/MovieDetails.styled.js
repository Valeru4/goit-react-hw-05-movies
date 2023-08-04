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
  gap: 30px;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 5px;

  color: #fff;
  border: none;
  border-radius: 5px;
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

const WrapperAdditionalLink = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 30px;
  font-weight: 600;
`;

const StyledAddLink = styled(Link)`
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
  justify-content: center;
  margin-left: 25px;
  margin-right: 25px;
  text-align: center;
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
const Genre = styled.p`
  color: #fff;
  font-size: 20px;
`;

const SubTitle = styled.h2`
  font-size: 35px;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 15px;

  font-weight: 600;
  color: #fff;
  margin-left: 50px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

const Section = styled.section`
  background-color: #333333;
  margin: 30px;
  border-radius: 15px;
  padding-bottom: 25px;
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
  SubTitle,
  Section,
  WrapperAdditionalLink,
  StyledAddLink,
  Genre,
};
