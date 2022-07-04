import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/Top">TOP</SLink>
      <SLink to="/Users">USERS</SLink>
      <SLink to="/Page1">Page1</SLink>
      <SLink to="/Page2">Page2</SLink>
      <SLink to="/Practice">Practice</SLink>
      <SLink to="/Atom">Atom</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
