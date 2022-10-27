import { Container, UseDisclosureReturn } from "@chakra-ui/react";
import { FC } from "react";
import { DeleteDBPopButton } from "../molecules/CustomButton";

export type BudgetDeleteProps = {
  onYes?: () => void;
  onNo?: () => void;
  deleteDBDisclosure: UseDisclosureReturn;
  isDisabled?: boolean;
};
export const BudgetDelete: FC<BudgetDeleteProps> = ({ deleteDBDisclosure, ...props }) => {
  return (
    <Container>
      <DeleteDBPopButton disclosure={deleteDBDisclosure} {...props} />
    </Container>
  );
};
