import { FC } from "react";
import { SecondaryCheckbox } from "../atoms/Checkbox";

export const DeleteCheckbox: FC<{ onChange?: () => void }> = (props) => {
  return <SecondaryCheckbox {...props} />;
};
