import styled from "styled-components";
import { palette, theme } from "styled-tools";

export const MainPageContainer = styled.div`
  max-width: 114rem;
  width: 80%;
  margin: 0 auto;
  padding: 4rem 0;
`;

export const MainPageFiltering = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 0;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MainPageDropbox = styled.div`
  display: flex;
`;

export const MainPageDropboxResetBtn = styled.button`
  ${theme("btnStyle.default")};
  ${theme("font-style.body4")};
  background-color: ${palette("white")};
  color: ${palette("primary")};
  border-color: transparent;
  cursor: pointer;
  display: flex;
  height: 2.4rem;
`;

export const MainPageDropboxIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.2rem;
`;

export const MainPageDropboxResetBtnTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainPageTitle = styled.div``;

export const MainPageSubTitle = styled.div``;

export const MainPageCardList = styled.div`
  display: flex;
  min-height: 10rem;
  flex-wrap: wrap;
  gap: 1.6rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainPageEmpty = styled.div`
  ${theme("fontStyle.body3")}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 10rem;
  border: 1px solid gray;
  color: ${palette("subGray")};
`;

export const MainPageToggleWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

export const MainPageToggleContainer = styled.div<{ toggle: boolean }>`
  position: relative;
  width: 3.4rem;
  height: 1.4rem;
  background-color: ${(props) => (props.toggle ? "#BBDEFB" : "#c2c2c2")};
  border-radius: 1.2rem;
  cursor: pointer;
  margin-right: 1.6rem;
  transition: 0.2s all;
`;

export const MainPageToggle = styled.div<{ toggle: boolean }>`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.toggle ? "50%" : "0")};
  transform: translate(0, -50%);
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => (props.toggle ? "#2196F3" : "#f5f5f5")};
  border-radius: 50%;
  transition: 0.2s all;
`;

export const MainPageToggleDescription = styled.div`
  ${theme("fontStyle.body3")};
`;

export const MainPageGreetingContainer = styled.div``;

export const MainPageGreetingTitle = styled.div`
  ${theme("fontStyle.body1")}
`;

export const MainPageGreetingSubTitle = styled.div`
  ${theme("fontStyle.body2")}
  color: #323D45;
`;
