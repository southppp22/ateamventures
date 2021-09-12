import React, { useState, useEffect, useRef } from "react";
import { FilterDropbox } from "components";
import { FilterOption } from "types/Data";

export interface IFilterDropboxContainerProps {
  options: FilterOption[];
  name: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FilterDropboxContainer(props: IFilterDropboxContainerProps) {
  console.log("test", props.options);
  const [fold, setFold] = useState(true);
  const dropboxRef = useRef<HTMLInputElement | null>(null);

  const onClickHandler = () => {
    setFold(!fold);
  };

  useEffect(() => {
    const outsideClickHandler = (e: MouseEvent) => {
      const el = dropboxRef?.current;
      if (fold) return;
      if (!el || el.contains(e.target as Node)) return;
      setFold(true);
    };

    document.addEventListener("mousedown", outsideClickHandler);
    return () => document.removeEventListener("mousedown", outsideClickHandler);
  }, [setFold, fold]);

  return (
    <FilterDropbox
      {...props}
      fold={fold}
      onClickHandler={onClickHandler}
      dropboxRef={dropboxRef}
    />
  );
}

export default FilterDropboxContainer;
