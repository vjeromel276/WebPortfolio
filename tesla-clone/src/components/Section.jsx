import model3 from "../images/model-3.jpg";
import styled from "styled-components";

export const Section = () => {
  return (
    <>
      <Wrap>
        <SectionText>
          <h1>Model S</h1>
          <p>
            Order Online for <span onClick=""> Touchless Delivery</span>
          </p>
        </SectionText>
        <ButtonGroup>
          <ButtonLeft>Custom Order</ButtonLeft>
          <ButtonRight>Existing Inventory</ButtonRight>
        </ButtonGroup>
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-image: url(${model3});
  background-repeat: no-repeat;
`;
const SectionText = styled.div`
  align-items: center;
  padding-top: 15vh;
  text-align: center;
  font-size: 40px;
  font-weight: 100;
  > p {
    font-size: 25px;
    cursor: pointer;
  }
  > p > span {
    text-decoration: underline;
  }
`;
const ButtonGroup = styled.div`
  align-self: center;
  margin-top: 31vh;
  padding-top: 20px;
`;
const ButtonLeft = styled.button`
  cursor: pointer;
  padding: 15px 10px;
  border-radius: 50px;
  margin-right: 35px;
  border: none;
  width: 350px;
  font-size: 20px;
  transition: 350ms;
  background-color: rgba(0, 0, 0, 0.65);
  color: rgba(250, 250, 250, 0.45);
  :hover {
    background-color: rgba(0, 0, 0, 0.45);
    color: rgba(250, 250, 250, 0.75);
  }
`;
const ButtonRight = styled(ButtonLeft)`
  background-color: rgba(250, 250, 250, 0.25);
  color: rgba(0, 0, 0, 0.85);
  :hover {
    background-color: rgba(250, 250, 250, 0.65);
    color: rgba(0, 0, 0, 0.65);
  }
`;
