/** @format */

import styled from "styled-components";

export const MobileWrapper = styled.div`
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin-top: 0;
    -webkit-transform: none;
    transform: none;
  }
`;
export const MobileBlock = styled.div`
  @media (max-width: 767px) {
    box-shadow: none;
    border: 1px solid #e1e2e3;
    border-radius: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
  }
`;
