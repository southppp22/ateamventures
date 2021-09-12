import styled from "styled-components";
import { ifProp, palette, theme } from "styled-tools";

export const FilterDropboxContainer = styled.div`
  margin-right: 0.8rem;
`;

export const FilterDropboxBtn = styled.button<{ active: boolean }>`
  ${theme("btnStyle.default")};
  background-color: ${(props) =>
    props.active ? palette("primaryDark") : palette("white")};
  border-color: ${(props) =>
    props.active ? "transparent" : palette("subGray")};
  color: ${(props) => props.active && palette("white")};
  display: flex;
  position: relative;
  &:hover {
    border-color: ${palette("primary")};
  }
`;

export const FilterDropboxBtnTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.2rem;
`;

export const FilterDropbBoxIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterDropboxBody = styled.div`
  position: absolute;
  border: 1px solid ${palette("subGray")};
  background-color: ${palette("white")};
  z-index: 1;
  border-radius: 0.4rem;
  padding: 0.6rem 1.2rem;
  margin-top: 0.4rem;
`;

export const FilterDropboxOption = styled.div`
  display: flex;
  align-items: center;
  margin: 0.4rem 0;
`;

export const FilterDropboxCheckbox = styled.input`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1rem;

  &:checked {
    color: ${palette("primary")};
  }
`;

export const FilterDropboxLabel = styled.label`
  display: inline-block;
  height: 2rem;
  ${theme("fontStyle.body3")}
`;
