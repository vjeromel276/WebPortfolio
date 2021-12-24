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
  font-size: 10px;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  padding-left: 20px;
`;
const Logo = styled.div`
  width: 20%;
`;
const NavBar = styled.div`
  display: flex;
  width: 15%;
  padding-left: 50px;
  justify-content: space-between;
`;
