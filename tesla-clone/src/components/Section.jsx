import downArrow from "../images/down-arrow.svg";
import styled from "styled-components";

export const Section = ({ car }) => {
  console.log(car);
  return (
    <>
      <Wrap style={{ backgroundImage: `url(${car.bgImage})` }}>
        <ItemText>
          <h1>{car.title}</h1>
          <p>{car.description}</p>
        </ItemText>
        <Button>
          <ButtonGroup>
            <ButtonLeft>{car.lftBtnTxt}</ButtonLeft>
            <ButtonRight>{car.rgtBtnTxt}</ButtonRight>
          </ButtonGroup>
          <DownArrow src={downArrow} />
        </Button>
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  padding-bottom: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonGroup = styled.div`
  display: flex;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ButtonLeft = styled.div`
  cursor: pointer;
  display: flex;
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  height: 40px;
  width: 256px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
  transition: 500ms;
  &:hover {
    background-color: rgba(23, 26, 32, 0.2);
    color: rgba(0, 0, 0, 0.8);
  }
`;
const ButtonRight = styled(ButtonLeft)`
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 0.8);
  transition: 500ms;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    color: rgba(0, 0, 0, 0.25);
  }
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animationDown infinite 1.5s;
  overflow-x: hidden;
`;
