import { FC, ReactNode } from "react";
import { Checkbox, CheckboxProps } from "@chakra-ui/react";

type BaseCheckboxProps = {
  children?: ReactNode;
  colorScheme?: CheckboxProps["colorScheme"];
  onChange?: CheckboxProps["onChange"];
};
const BaseCheckbox: FC<BaseCheckboxProps> = (props) => {
  return <Checkbox {...props} size={["sm", "sm", "md"]} />;
};

type CustomCheckboxProps = Omit<BaseCheckboxProps, "colorScheme">;
export const PrimaryCheckbox: FC<CustomCheckboxProps> = (props) => {
  return <BaseCheckbox {...props} colorScheme="green" />;
};
export const SecondaryCheckbox: FC<CustomCheckboxProps> = (props) => {
  return <BaseCheckbox {...props} colorScheme="red" />;
};
