import { FC } from "react";
import { Checkbox } from "@chakra-ui/react";
import { BaseCheckboxProps, PrimaryCheckboxProps } from "../../commons/types";

const BaseCheckbox: FC<BaseCheckboxProps> = (props) => {
  return <Checkbox {...props} size={["sm", "sm", "md"]} />;
};

export const PrimaryCheckbox: FC<PrimaryCheckboxProps> = (props) => {
  return <BaseCheckbox {...props} colorScheme="green" />;
};
export const SecondaryCheckbox: FC<PrimaryCheckboxProps> = (props) => {
  return <BaseCheckbox {...props} colorScheme="red" />;
};
