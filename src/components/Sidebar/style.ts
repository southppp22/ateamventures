import styled from "styled-components";
import { palette, theme } from "styled-tools";

export const SidebarContainer = styled.div<{ fold: boolean }>`
  visibility: ${(props) => (props.fold ? "hidden" : "visible")};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SidebarWrap = styled.div<{ fold: boolean; ref: any }>`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: ${(props) => (props.fold ? "0" : "70%")};
  display: flex;
  flex-direction: column;
  transition: 0.3s all;
  background-color: #fff;
`;

export const SidebarHeader = styled.div`
  ${theme("fontStyle.body2")};
  color: ${palette("primary")};
  padding: 2rem 1.6rem;
`;

export const Divider = styled.hr`
  border: 1px solid ${palette("lightGray")};
`;

export const SidebarBody = styled.ul``;
