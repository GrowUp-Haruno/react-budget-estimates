import { Input, InputProps } from "@chakra-ui/react";
import { FC } from "react";

export const BaseInput: FC<{
  onChange?: InputProps["onChange"];
  value?: InputProps["value"];
  textAlign?: InputProps["textAlign"];
}> = (props) => {
  return <Input {...props} size={["xs", "xs", "md"]} variant="filled" />;
};