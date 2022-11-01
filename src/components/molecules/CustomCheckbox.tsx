import { FC } from "react";
import { DeleteCheckboxProps } from "../../commons/types";
import { SecondaryCheckbox } from "../atoms/Checkbox";

export const DeleteCheckbox: FC<DeleteCheckboxProps> = (props) => {
  return <SecondaryCheckbox {...props} />;
};
