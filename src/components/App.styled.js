import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// const Wrapper = styled.body`
//   background-color: #56dcc6;
//   box-shadow: 5px 5px #fff;
// `;

const Header = styled.header`
  background-color: #015346;
  padding: 15px;
  font-size: 40px;
  padding-left: 50px;
  font-weight: 800;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: row;
  align-items: center;
  gap: 15px;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 8px;
  border-radius: 5px;

  &:hover,
  :focus {
    background-color: #01927c;
  }

  &.active {
    background-color: #01927c;
  }
`;

export { Header, Navigation, StyledNavLink };
