import React, { useState, useEffect } from "react";
import * as S from "./style";
import getRequests from "api/getRequests";
import { CardContainer, FilterDropboxContainer } from "components";
import useCheckbox from "hooks/useCheckbox";
import filterOptions from "fixtures/filterOptions";
import RefreshIcon from "@material-ui/icons/Refresh";
import { filtering, getFilteredOptions } from "utils/filter";
import { FilterOption, Request } from "types/Data";

function MainPage() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<Request[]>(requests);
  const [toggle, setToggle] = useState(false);
  const { state, changeHandler, reset } = useCheckbox(filterOptions);
  const { method, material } = state;

  const resetBtnRender =
    method.some((option: FilterOption) => option.status) ||
    material.some((option: FilterOption) => option.status);

  useEffect(() => {
    let result = requests;
    const filteredMethod = getFilteredOptions(method);
    const filteredMaterial = getFilteredOptions(material);

    if (filteredMethod.length) {
      result = filtering(result, "method", filteredMethod);
    }
    if (filteredMaterial.length) {
      result = filtering(result, "material", filteredMaterial);
    }
    if (toggle) {
      result = result.filter((request: Request) => request.status === "상담중");
    }

    setFilteredRequests(result);
  }, [method, material, requests, toggle]);

  useEffect(() => {
    getRequests().then((res) => setRequests(res.data));
  }, []);

  return (
    <S.MainPageContainer>
      <S.MainPageGreetingContainer>
        <S.MainPageGreetingTitle>들어온 요청</S.MainPageGreetingTitle>
        <S.MainPageGreetingSubTitle>
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </S.MainPageGreetingSubTitle>
      </S.MainPageGreetingContainer>
      <S.MainPageFiltering>
        <S.MainPageDropbox>
          <FilterDropboxContainer
            options={method}
            name="method"
            changeHandler={changeHandler}
          />
          <FilterDropboxContainer
            options={material}
            name="material"
            changeHandler={changeHandler}
          />
          {resetBtnRender && (
            <S.MainPageDropboxResetBtn onClick={reset}>
              <S.MainPageDropboxIconContainer>
                <RefreshIcon />
              </S.MainPageDropboxIconContainer>
              <S.MainPageDropboxResetBtnTitle>
                필터링 리셋
              </S.MainPageDropboxResetBtnTitle>
            </S.MainPageDropboxResetBtn>
          )}
        </S.MainPageDropbox>
        <S.MainPageToggleWrap>
          <S.MainPageToggleContainer
            toggle={toggle}
            onClick={() => setToggle(!toggle)}
          >
            <S.MainPageToggle toggle={toggle} />
          </S.MainPageToggleContainer>
          <S.MainPageToggleDescription>
            상담 중인 요청만 보기
          </S.MainPageToggleDescription>
        </S.MainPageToggleWrap>
      </S.MainPageFiltering>
      <S.MainPageCardList>
        {filteredRequests?.length ? (
          filteredRequests.map((request: Request) => (
            <CardContainer key={request.id} {...request} />
          ))
        ) : (
          <S.MainPageEmpty>조건에 맞는 견적 요청이 없습니다.</S.MainPageEmpty>
        )}
      </S.MainPageCardList>
    </S.MainPageContainer>
  );
}

export default MainPage;
