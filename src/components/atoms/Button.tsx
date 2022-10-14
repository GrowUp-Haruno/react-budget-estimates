import { FC, ReactNode } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

type BaseButtonProps = {
  children: ReactNode;
  colorScheme?: ButtonProps["colorScheme"];
  onClick?: ButtonProps["onClick"];
  w?:ButtonProps['w']
  width?:ButtonProps['w']
};
const BaseButto: FC<BaseButtonProps> = (props) => {
  return <Button {...props} size={["xs", "sm", "md"]} />;
};

export type PrimaryButtonProps = Omit<BaseButtonProps, "colorScheme">;
export const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  return <BaseButto {...props} colorScheme="green" />;
};

export const SecondaryButton: FC<PrimaryButtonProps> = (props) => {
  return <BaseButto {...props} colorScheme="red" />;
};
