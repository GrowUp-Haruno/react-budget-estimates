import { FC, ReactNode } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

type BaseButtonProps = {
  children: ReactNode;
  colorScheme?: ButtonProps["colorScheme"];
  onClick?: () => void;
};
const BaseButto: FC<BaseButtonProps> = (props) => {
  return <Button {...props} size={["xs", "sm", "md"]} />;
};

type CustomButtonProps = Omit<BaseButtonProps, "colorScheme">;
export const PrimaryButton: FC<CustomButtonProps> = (props) => {
  return <BaseButto {...props} colorScheme="green" />;
};
export const SecondaryButton: FC<CustomButtonProps> = (props) => {
  return <BaseButto {...props} colorScheme="red" />;
};
