import React from "react";
import * as S from "./style";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import { IFilterDropboxContainerProps } from "components/FilterDropboxContainer";
import { FilterOption } from "types/Data";

interface IFilterDropboxProps extends IFilterDropboxContainerProps {
  fold: boolean;
  onClickHandler: () => void;
  dropboxRef: { current: HTMLInputElement | null };
}

function FilterDropbox({
  options,
  name,
  changeHandler,
  fold,
  onClickHandler,
  dropboxRef,
}: IFilterDropboxProps) {
  const isSelected = options.some((option: FilterOption) => option.status);

  return (
    <S.FilterDropboxContainer ref={dropboxRef}>
      <S.FilterDropboxBtn onClick={onClickHandler} active={isSelected}>
        <S.FilterDropboxBtnTitle>
          {name === "method" ? "가공방식" : "재료"}
        </S.FilterDropboxBtnTitle>
        <S.FilterDropbBoxIconContainer>
          <ArrowDropDownSharpIcon />
        </S.FilterDropbBoxIconContainer>
      </S.FilterDropboxBtn>
      {fold || (
        <S.FilterDropboxBody>
          {options.map((option: FilterOption) => (
            <S.FilterDropboxOption key={option.id}>
              <S.FilterDropboxCheckbox
                id={option.name}
                name={name}
                type="checkbox"
                checked={option.status}
                onChange={changeHandler}
              />
              <S.FilterDropboxLabel htmlFor={option.name}>
                {option.name}
              </S.FilterDropboxLabel>
            </S.FilterDropboxOption>
          ))}
        </S.FilterDropboxBody>
      )}
    </S.FilterDropboxContainer>
  );
}

export default FilterDropbox;
