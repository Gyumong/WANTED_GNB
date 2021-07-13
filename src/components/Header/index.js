/** @format */

import {
  HeaderWrapper,
  HeaderBlock,
  Nav,
  MenuList,
  Menu,
  Logo,
  SideMenu,
} from "./styles";
import { SearchOutlined, BellOutlined, MenuOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import MobileMenu from "../MobileMenu";
const Header = () => {
  const [menutoggle, setMenutoggle] = useState(false);

  const toggle = useCallback(() => {
    setMenutoggle((prev) => !prev);
  }, [menutoggle]);
  if (menutoggle) {
    return <MobileMenu />;
  }
  return (
    <HeaderWrapper>
      <HeaderBlock>
        <Nav>
          <Logo>wanted</Logo>
          <MenuList>
            <Menu to="/" activeClassName="active" exact>
              <a>홈</a>
            </Menu>
            <Menu to="/Search" activeClassName="active">
              <a>탐색</a>
            </Menu>
            <Menu to="/Career" activeClassName="active">
              <a>커리어 성장</a>
            </Menu>
          </MenuList>
          <SideMenu>
            <ul>
              <li>
                <button>
                  <SearchOutlined style={{ fontSize: "18px" }} />
                </button>
              </li>
              <li>
                <button>
                  <BellOutlined style={{ fontSize: "18px" }} />
                </button>
              </li>
              <li>
                <button onClick={toggle}>
                  <MenuOutlined
                    style={{ fontSize: "18px", marginRight: "10px" }}
                  />
                </button>
              </li>
            </ul>
          </SideMenu>
        </Nav>
      </HeaderBlock>
    </HeaderWrapper>
  );
};

export default Header;
