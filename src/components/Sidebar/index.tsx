import React, { useEffect, useRef } from "react";
import * as S from "./style";
import { SidebarOption } from "components";
import sidebarOptions from "fixtures/sidebarOptions";
import { ISidebarOption } from "types/Data";

interface ISidebarProps {
  fold: boolean;
  setFold: (state: boolean) => void;
}

function Sidebar({ fold, setFold }: ISidebarProps) {
  const sidebarRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = sidebarRef?.current;
      if (!el || el.contains(e.target as Node)) return;
      setFold(true);
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setFold]);

  return (
    <S.SidebarContainer fold={fold}>
      <S.SidebarWrap fold={fold} ref={sidebarRef}>
        <S.SidebarHeader>CAPA 파트너스</S.SidebarHeader>
        <S.Divider />
        <S.SidebarBody>
          {sidebarOptions.map((option: ISidebarOption) => (
            <SidebarOption key={option.id} {...option} />
          ))}
        </S.SidebarBody>
      </S.SidebarWrap>
    </S.SidebarContainer>
  );
}

export default Sidebar;
