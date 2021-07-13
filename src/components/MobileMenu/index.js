/** @format */

import React from "react";
import {
  MobileWrapper,
  MobileBlock,
  TitleTop,
  ProfileBlock,
  TopBar,
  TopItem,
} from "./styles";
import { CloseOutlined } from "@ant-design/icons";
const MobileMenu = () => {
  return (
    <MobileWrapper>
      <MobileBlock>
        <TitleTop>
          <i>로고</i>
          <button>
            <CloseOutlined style={{ fontSize: "24px" }} />
          </button>
        </TitleTop>
        <ProfileBlock>
          <TopBar>
            <TopItem>
              <span>My 원티드</span>
              <div>아이콘</div>
            </TopItem>
            <TopItem>
              <div>프로필</div>
            </TopItem>
            <TopItem
              style={{
                paddingTop: "15px",
                borderTop: "1px solid #eee",
                marginTop: "15px",
              }}
            >
              <div style={{ padding: "15px 0" }}>이력서</div>
            </TopItem>
            <TopItem>
              <div>매치업</div>
            </TopItem>
            <TopItem>
              <div>추천</div>
            </TopItem>
            <TopItem>
              <div>지원 현황</div>
            </TopItem>
            <TopItem>
              <div>프리랜서</div>
            </TopItem>
            <TopItem
              style={{
                paddingTop: "15px",
                borderTop: "1px solid #eee",
                marginTop: "15px",
              }}
            >
              <div style={{ padding: "15px 0" }}>직군별 연봉</div>
            </TopItem>
            <TopItem>
              <div>커리어 성장</div>
            </TopItem>
            <TopItem
              style={{
                paddingTop: "15px",
                borderTop: "1px solid #eee",
                marginTop: "15px",
              }}
            >
              <div style={{ padding: "15px 0" }}>기업 서비스</div>
            </TopItem>
            <TopItem>
              <div style={{ color: "#999999" }}>로그아웃</div>
            </TopItem>
          </TopBar>
        </ProfileBlock>
      </MobileBlock>
    </MobileWrapper>
  );
};

export default MobileMenu;
