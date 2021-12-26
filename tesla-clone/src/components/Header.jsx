import { Menu as MenuIcon } from "@mui/icons-material";
import logo from "../images/logo.svg";
import styled from "styled-components";

export const Header = () => {
  return (
    <>
      <Container>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Menu>
          <a href="#.com">Model S</a>
          <a href="#.com">Model 3</a>
          <a href="#.com">Model X</a>
          <a href="#.com">Model Y</a>
          <a href="#.com">Solar Roof</a>
          <a href="#.com">Solar Panels</a>
        </Menu>
        <RightMenu>
          <a href="#.com">Shop</a>
          <a href="#.com">Tesla Account</a>
          <img src={MenuIcon} alt="" />
        </RightMenu>
      </Container>
    </>
  );
};
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  /* border: dashed 1px darkblue; */
  /* width: 100vw; */
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
`;
const Menu = styled.div`
  display: flex;
  flex: 1;
  align-content: center;
  > a {
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    word-wrap: normal;
  }
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;
const Logo = styled.div`
  margin: 0 30px;
  cursor: pointer;
  contain: content;
`;
const RightMenu = styled.div`
  /* display: flex;
  margin: 0 30px;
  border: dashed 1px darkblue; */
  > a {
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    word-wrap: normal;
  }
`;
