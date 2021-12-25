import { Section } from "./Section";
import accessories from "../images/accessories.jpg";
import model3 from "../images/model-3.jpg";
import models from "../images/model-s.jpg";
import modelx from "../images/model-x.jpg";
import modely from "../images/model-y.jpg";
import solarPanel from "../images/solar-panel.jpg";
import solarRoof from "../images/solar-roof.jpg";
import styled from "styled-components";

const Items = [
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
  (solarPanel = {
    title: "Lowest Cost Solar Panels in America",
    bgImage: `${solarPanel}`,
    description: "Money-back Guarantee",
    lftBtnTxt: "Order Now",
    rgtBtnTxt: "Learn More",
  }),
  (solarRoof = {
    title: "Solar for New Roofs",
    bgImage: `${solarRoof}`,
    description: "Solar Roof COsts Less Than a New Roof",
    lftBtnTxt: "Order Now",
    rgtBtnTxt: "Learn More",
  }),
  (accessories = {
    title: "Accessories",
    bgImage: `${accessories}`,
    description: "",
    lftBtnTxt: "Shop Now",
  }),
];

export const Home = () => {
  return (
    <>
      <Container>
        <ul>
          {Items.map((item) => (
            <Section item={item} />
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
