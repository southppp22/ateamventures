import { Request, FilterCategory, FilterOption } from "types/Data";

export const filtering = (
  origin: Request[],
  category: FilterCategory,
  option: string[]
) => {
  const result = origin.filter((el: Request) => {
    let isValid = false;
    el[category].forEach((ele: string) => {
      if (option.includes(ele)) {
        isValid = true;
      }
    });
    return isValid;
  });
  return result;
};

export const getFilteredOptions = (filterOptions: FilterOption[]) => {
  return filterOptions
    .filter((el: FilterOption) => el.status)
    .map((el: FilterOption) => el.name);
};
