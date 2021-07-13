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
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderBlock>
        <Nav>
          <Logo>wanted</Logo>
          <MenuList>
            <Menu>
              <a>홈</a>
            </Menu>
            <Menu>
              <a>탐색</a>
            </Menu>
            <Menu>
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
                <button>
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
