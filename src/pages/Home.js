/** @format */

import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
const HomeWrapper = styled.div`
  margin-top: 70px;
`;
const Home = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <h1>Home</h1>
      </HomeWrapper>
    </>
  );
};

export default Home;
