import React from "react";
import { ISidebarOption } from "types/Data";
import * as S from "./style";

function SidebarOption({ name, Icon }: ISidebarOption) {
  return (
    <S.SidebarOptionContainer>
      <S.SidebarOption>
        {Icon && <Icon />}
        <S.SidebarOptionName>{name}</S.SidebarOptionName>
      </S.SidebarOption>
    </S.SidebarOptionContainer>
  );
}

export default SidebarOption;
