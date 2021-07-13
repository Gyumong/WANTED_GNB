/** @format */

import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
const SearchWrapper = styled.div`
  margin-top: 70px;
`;
const Search = () => {
  return (
    <>
      <Header />
      <SearchWrapper>
        <h1>Search</h1>
      </SearchWrapper>
    </>
  );
};

export default Search;
