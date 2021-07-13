/** @format */

import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const HeaderWrapper = styled.div`
  position: fixed;
  padding-right: initial;
  width: 100%;
  top: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100;
`;

export const HeaderBlock = styled.div`
  @media (max-width: 767px) {
    height: 57px;
    padding-top: 4px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Logo = styled.div`
  width: 100%;
  padding: 15px 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  height: inherit;
  text-align: center;
  margin: 0;
  list-style: none;
  display: block;
  list-style-type: disc;

  @media (max-width: 767px) {
    text-align: left;
  }
`;

export const Menu = styled(NavLink)`
  height: inherit;
  display: inline-block;
  &.active {
    box-shadow: inset 0 -2px #258bf7;
  }

  padding: 14px 13px 19px 20px;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;

  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
`;

export const SideMenu = styled.aside`
  display: block;
  padding: 9px 0;
  height: 100%;
  ul {
    height: 100%;
    margin: 0;
    list-style: none;
    li {
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      button {
        height: 100%;
        padding: 0 10px;
      }
    }
  }
  @media (max-width: 767px) {
    padding: 14px 0;
  }
`;
