import styled from "styled-components";

export const Header = () => {
  return (
    <>
      <Container>
        <Logo>
          image
          <img src="" alt="" />
        </Logo>
        <Content>
          <h2>Model S</h2>
          <h2>Model 3</h2>
          <h2>Model X</h2>
          <h2>Model Y</h2>
          <h2>Solar Roof</h2>
          <h2>Solar Panels</h2>
        </Content>
        <NavBar>
          <h2>Shop</h2>
          <h2>Account</h2>
          <h2>Menu</h2>
        </NavBar>
      </Container>
    </>
  );
};
const Container = styled.div`
  background: none;
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;
const Content = styled.div`
  display: flex;
  width: 35%;
  line-height: 1.5;
  justify-content: space-between;
  padding-left: 20px;
  font-weight: 100;
  font-size: 8px;

  font-family: "Helvetica Neue";
`;
const Logo = styled.div`
  width: 05%;
  margin-left: 30px;
`;
const NavBar = styled.div`
  display: flex;
  width: 15%;
  font-size: 10px;
  > h2 {
    padding-right: 10px;
  }
`;
