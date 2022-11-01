import { FC } from "react";
import { Input } from "@chakra-ui/react";
import { BaseInputProps, PrimaryInputProps } from "../../commons/types";

export const BaseInput: FC<BaseInputProps> = (props) => {
  return <Input {...props} size={["xs", "xs", "md"]} variant="filled" />;
};

export const PrimaryInput: FC<PrimaryInputProps> = ({ isDelete, ...props }) => {
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
