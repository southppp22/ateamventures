import styled from "styled-components";
import { palette, theme } from "styled-tools";

export const HeaderContainer = styled.header`
  ${theme("fontStyle.body3")};
  background-color: ${palette("primaryDark")};
  width: 100vw;
  color: ${palette("white")};
`;

export const HeaderWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiSvgIcon-root {
    font-size: 2.4rem;
    margin-right: 2rem;
    cursor: pointer;
  }
`;

export const HeaderLogo = styled.h1`
  ${theme("fontStyle.body1")}
`;

export const HeaderRight = styled.div`
  display: flex;
  width: 21rem;
`;

export const HeaderClientContainer = styled.div`
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    font-size: 1.4rem;
  }
`;

export const HeaderClient = styled.div`
  margin-left: 0.8rem;
`;

export const Divider = styled.hr`
  margin: 0 3.2rem;
`;

export const HeaderStatus = styled.div`
  cursor: pointer;
`;
