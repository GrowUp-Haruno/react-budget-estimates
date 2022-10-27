import { Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";

const BaseText: FC<TextProps> = (props) => {
  return <Text {...props} />;
};
export const PrimaryText: FC<TextProps> = (props) => {
  return <BaseText {...props} />;
};
