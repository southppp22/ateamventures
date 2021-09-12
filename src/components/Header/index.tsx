import React from "react";
import * as S from "./style";
import DomainIcon from "@material-ui/icons/Domain";
import DehazeIcon from "@material-ui/icons/Dehaze";

interface IHeaderProps {
  isMobile: boolean;
  setSidebarFold: (state: boolean) => void;
}

function Header({ isMobile, setSidebarFold }: IHeaderProps) {
  return (
    <S.HeaderContainer>
      <S.HeaderWrap>
        <S.HeaderLogoContainer>
          {isMobile && <DehazeIcon onClick={() => setSidebarFold(false)} />}
          <S.HeaderLogo>CAPA 파트너스</S.HeaderLogo>
        </S.HeaderLogoContainer>
        {isMobile || (
          <S.HeaderRight>
            <S.HeaderClientContainer>
              <DomainIcon />
              <S.HeaderClient>A 가공 업체</S.HeaderClient>
            </S.HeaderClientContainer>
            <S.Divider />
            <S.HeaderStatus>로그아웃</S.HeaderStatus>
          </S.HeaderRight>
        )}
      </S.HeaderWrap>
    </S.HeaderContainer>
  );
}

export default Header;
