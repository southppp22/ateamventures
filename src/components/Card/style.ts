import styled from "styled-components";
import { palette, theme } from "styled-tools";

export const CardContainer = styled.div`
  ${theme("fontStyle.body3")};
  position: relative;
  border: 1px solid #ccc;
  padding: 2.4rem 1.6rem;
  height: 36.9rem;
  max-width: 36.9rem;
  border-radius: 0.4rem;
  flex-basis: calc(33% - 1.06rem);

  &:hover {
    border-color: #2196f3;
  }
`;

export const CardTop = styled.div`
  margin-bottom: 1.6rem;
`;

export const CardBottom = styled.div`
  margin: 3.2rem 0;
`;

export const CardHeader = styled.div`
  position: relative;
  height: 4.8rem;
  margin-bottom: 1.6rem;
`;

export const CardTitle = styled.div`
  ${theme("fontStyle.body2")};
  margin-bottom: 0.4rem;
`;

export const CardClient = styled.div``;

export const CardDue = styled.div`
  color: ${palette("subGray")};
  margin: 0.8rem 0;
`;

export const CardDetail = styled.div`
  display: flex;
  height: 2rem;
  margin-bottom: 0.8rem;
`;

export const CardDetailKey = styled.div`
  width: 7rem;
  margin-right: 3.2rem;
  ${theme("fontStyle.body4")};
`;

export const CardDetailValue = styled.div`
  font-weight: 600;
`;

export const CardBtnContainer = styled.div`
  width: 19.2rem;
  height: 3.2rem;
`;

export const CardRequestBtn = styled.button`
  ${theme("btnStyle.default")};
  color: ${palette("white")};
  background-color: ${palette("primary")};
  border-color: transparent;
  width: 10.8rem;
  height: 3.2rem;
  margin-right: 0.8rem;
  cursor: pointer;
`;

export const CardChatBtn = styled.button`
  ${theme("btnStyle.default")};
  color: ${palette("primary")};
  background-color: ${palette("white")};
  border-color: ${palette("primary")};
  width: 7.6rem;
  height: 3.2rem;
  cursor: pointer;
`;

export const CardStatus = styled.div`
  ${theme("fontStyle.body5")};
  color: ${palette("warningDark")};
  border: 1px solid ${palette("warningDark")};
  border-radius: 12px;
  padding: 0.4rem 0.8rem;
  position: absolute;
  right: 0;
  top: 0;
`;

export const CardDivider = styled.hr`
  border: 1px solid ${palette("lightGray")};
`;
