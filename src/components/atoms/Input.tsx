import { Input, InputProps } from "@chakra-ui/react";
import { FC } from "react";

export const BaseInput: FC<Omit<InputProps, "size" | "variant">> = (props) => {
  return <Input {...props} size={["xs", "xs", "md"]} variant="filled" />;
};
