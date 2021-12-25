import { Section } from "./Section";
import model3 from "../images/model-3.jpg";
import models from "../images/model-s.jpg";
import modelx from "../images/model-x.jpg";
import modely from "../images/model-y.jpg";
import styled from "styled-components";

const cars = [
  (model3 = {
    title: "Model 3",
    bgImage: `${model3}`,
    description: "Order Online for Touchless Delivery",
    lftBtnTxt: "Custom order",
    rgtBtnTxt: "Existing inventory",
  }),
  (modely = {
    title: "Model Y",
    bgImage: `${modely}`,
    description: "Order Online for Touchless Delivery",
    lftBtnTxt: "Custom order",
    rgtBtnTxt: "Existing inventory",
  }),
  (modelx = {
    title: "Model X",
    bgImage: `${modelx}`,
    description: "Order Online for Touchless Delivery",
    lftBtnTxt: "Custom order",
    rgtBtnTxt: "Existing inventory",
  }),
  (models = {
    title: "Model  S",
    bgImage: `${models}`,
    description: "Order Online for Touchless Delivery",
    lftBtnTxt: "Custom order",
    rgtBtnTxt: "Existing inventory",
  }),
];

export const Home = () => {
  return (
    <>
      <Container>
        <ul>
          {cars.map((car) => (
            <Section car={car} />
          ))}
        </ul>
      </Container>
    </>
  );
};
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;
