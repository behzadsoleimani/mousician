import { ChangeEvent } from "react";

export interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
