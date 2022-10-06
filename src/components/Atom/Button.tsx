import { Button, ButtonProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type BaseButtonProps = {
  children: ReactNode;
  colorScheme?: ButtonProps["colorScheme"];
  onClick?: () => void;
};
type CustomButtonProps = Omit<BaseButtonProps, "colorScheme">;

const BaseButto: FC<BaseButtonProps> = (props) => {
  return <Button {...props} size={["xs", "sm", "md"]} />;
};

export const PrimaryButto: FC<CustomButtonProps> = (props) => {
  return <BaseButto {...props} colorScheme="green" />;
};

export const SecondaryButton: FC<CustomButtonProps> = (props) => {
  return <BaseButto {...props} colorScheme="red" />;
};
