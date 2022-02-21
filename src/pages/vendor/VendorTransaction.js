import React from "react";
import styled from "styled-components";
import Vendor from "./Vendor";

const Container = styled.div`
  min-height: calc(100vh - 80px);

  background-image: radial-gradient(
    circle,
    #3c3d3f,
    #2f3132,
    #242525,
    #191a19,
    #0d0d0c
  );
  display: flex;
  flex: 1;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const BankInfo = styled.div`
  height: 500px;
  width: 700px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const VendorTransaction = () => {
  return (
    <Container>
      <Vendor />
      <BankInfo>
        {/* <BankC>nabil bank</BankC>
        <BankC>nepal rastra bank</BankC> */}
      </BankInfo>
    </Container>
  );
};

export default VendorTransaction;
