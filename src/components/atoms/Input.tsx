import { Input, InputProps } from "@chakra-ui/react";
import { FC } from "react";

export const BaseInput: FC<Omit<InputProps, "size" | "variant">> = (props) => {
  return <Input {...props} size={["xs", "xs", "md"]} variant="filled" />;
};

export const PrimaryInput: FC<
  Omit<InputProps, "size" | "variant" | "bg" | "color" | "bgColor"> & { isDelete?: boolean }
> = ({ isDelete, ...props }) => {
  if (isDelete === undefined) return <BaseInput {...props} />;
  return (
    <BaseInput
      {...props}
      bg={isDelete ? "red" : undefined}
      color={isDelete ? "whiteAlpha.900" : undefined}
      isDisabled={isDelete || props.isDisabled}
    />
  );
};
