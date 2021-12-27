import { Menu as MenuIcon } from "@material-ui/icons";
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
          {/* <a href="#.com"> */}
          <MenuIcon style={{ paddingBottom: 5 }} />
          {/* </a> */}
        </RightMenu>
      </Container>
    </>
  );
};
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
`;
const Menu = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-content: center;
  justify-content: center;
  > a {
    cursor: pointer;
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
  flex: 0.4;
`;
const RightMenu = styled.div`
  display: flex;
  flex: 0.6;
  /* margin: 0 30px; */
  align-content: center;
  justify-content: center;
  > a {
    cursor: pointer;
    text-transform: uppercase;
    margin-right: 10px;
    word-wrap: normal;
    > svg {
    }
  }
`;
