import downArrow from "../images/down-arrow.svg";
import styled from "styled-components";

export const Section = ({ item }) => {
  return (
    <>
      <Wrap style={{ backgroundImage: `url(${item.bgImage})` }}>
        <ItemText>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </ItemText>
        <Button>
          <ButtonGroup>
            <ButtonLeft>{item.lftBtnTxt}</ButtonLeft>
            {item.rgtBtnTxt && <ButtonRight>{item.rgtBtnTxt}</ButtonRight>}
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
  //& This is how you can pass &use props in styled components
  /* background-image: (${(props) => `url("/images/${props.bgImage}")`}); */
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-weight: 100;
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
  /* opacity: 0.85; */
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 100;
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
    background-color: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 1);
  }
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animationDown infinite 1.5s;
  overflow-x: hidden;
`;
