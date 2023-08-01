import styled from 'styled-components';

const CastList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
`;
const CastItem = styled.li`
  display: flex;
  flex-direction: column;

  gap: 10px;

  background-color: #333333;
  border-radius: 15px;

  padding-bottom: 15px;
  max-width: 154px;
`;
const Text = styled.p`
  text-align: center;
  font-size: 15px;
  color: #fff;
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

const Image = styled.img`
  max-width: 154px;

  background: #424242;
  border-radius: 15px;
`;
export { Text, CastList, StyledLink, Image, CastItem };
