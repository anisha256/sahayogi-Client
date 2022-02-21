import React from "react";
import Projects from "../components/projects/Projects";
import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 80px);
  padding: 20px;
  background-image: radial-gradient(
    circle,
    #3c3d3f,
    #2f3132,
    #242525,
    #191a19,
    #0d0d0c
  );
  @media only screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
  }
`;

const Instruction = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  gap: 1rem;
`;

const Esewa = styled.label`
  font-weight: bold;
`;
const Donate = () => {
  return (
    <Container>
      <Instruction>
        <h1>INSTRUCTION</h1>
        In order to donate, please send cash AMOUNT that you want to donate
        using ESEWA ON <Esewa>9812458902</Esewa> with ur MetaMask wallet address
        in payment details. Then we will send the token equivalent to ur cash
        amount on ur respective metamask wallet address which you will be able
        to donate.
        <h1>THANK YOU !!!</h1>
      </Instruction>
      <Projects donate={true} />
    </Container>
  );
};

export default Donate;
