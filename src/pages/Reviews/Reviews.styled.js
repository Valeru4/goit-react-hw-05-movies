import styled from 'styled-components';

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

const ReviewItem = styled.li`
  background-color: #333333;
  border-radius: 5px;
  margin-left: 25px;
  margin-right: 25px;
  padding: 15px;
`;

const ReviewList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 25px;
  margin-bottom: 12px;
`;

const Text = styled.p`
  color: #fff;
  font-size: 18px;
  margin-bottom: 12px;
`;

export { Text, Title, StyledLink, ReviewItem, ReviewList };
