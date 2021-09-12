import { SvgIconProps } from "@material-ui/core";

export interface Request {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

export interface FilterOption {
  id: number;
  name: string;
  status: boolean;
}

export interface FilterOptions {
  method: FilterOption[];
  material: FilterOption[];
}

export type FilterCategory = "method" | "material";

export interface ISidebarOption {
  id: number;
  name: string;
  Icon: ((props: SvgIconProps) => JSX.Element) | null;
}
