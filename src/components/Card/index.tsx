import React from "react";
import { Request } from "types/Data";
import * as S from "./style";

function Card({
  title,
  client,
  due,
  count,
  amount,
  method = [],
  material = [],
  status,
}: Request) {
  return (
    <S.CardContainer>
      <S.CardTop>
        <S.CardHeader>
          {status === "상담중" && <S.CardStatus>{status}</S.CardStatus>}
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardClient>{client}</S.CardClient>
        </S.CardHeader>
        <S.CardDue>{due}까지 납기</S.CardDue>
      </S.CardTop>
      <S.CardDivider />
      <S.CardBottom>
        <S.CardDetail>
          <S.CardDetailKey>도면 개수</S.CardDetailKey>
          <S.CardDetailValue>{count}개</S.CardDetailValue>
        </S.CardDetail>
        <S.CardDetail>
          <S.CardDetailKey>총 수량</S.CardDetailKey>
          <S.CardDetailValue>{amount}개</S.CardDetailValue>
        </S.CardDetail>
        <S.CardDetail>
          <S.CardDetailKey>가공 방식</S.CardDetailKey>
          <S.CardDetailValue>{method.join(", ")}</S.CardDetailValue>
        </S.CardDetail>
        <S.CardDetail>
          <S.CardDetailKey>재료</S.CardDetailKey>
          <S.CardDetailValue>{material.join(", ")}</S.CardDetailValue>
        </S.CardDetail>
      </S.CardBottom>
      <S.CardBtnContainer>
        <S.CardRequestBtn>요청 내역 보기</S.CardRequestBtn>
        <S.CardChatBtn>채팅하기</S.CardChatBtn>
      </S.CardBtnContainer>
    </S.CardContainer>
  );
}

export default Card;
