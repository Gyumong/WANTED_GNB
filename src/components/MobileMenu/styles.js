/** @format */

import styled from "styled-components";

export const MobileWrapper = styled.div`
  @media (max-width: 767px) {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin-top: 0;
    -webkit-transform: none;
    transform: none;
    background-color: white;
  }
`;
export const MobileBlock = styled.div`
  @media (max-width: 767px) {
    box-shadow: none;
    border: 1px solid #e1e2e3;
    border-radius: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  i {
    display: inline-block;
    font-size: 24px;
    line-height: 1;
    padding: 0;
    margin: 13px 0;
  }
  button {
    cursor: pointer;
  }
`;

export const ProfileBlock = styled.div`
  margin: 45px 0 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TopBar = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const TopItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 15px 0;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
`;
