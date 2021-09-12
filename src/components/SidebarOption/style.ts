import styled from "styled-components";
import { theme } from "styled-tools";

export const SidebarOption = styled.div`
  ${theme("fontStyle.body3")}
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 3.2rem;
  cursor: pointer;

  .MuiSvgIcon-root {
    margin-right: 1rem;
    font-size: 2rem;
  }
`;

export const SidebarOptionContainer = styled.li`
  padding-top: 2.4rem;
`;

export const SidebarOptionName = styled.div``;
