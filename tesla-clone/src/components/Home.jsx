import { Section } from "./Section";
import styled from "styled-components";

export const Home = () => {
  return (
    <>
      <Container>
        <Section />
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
