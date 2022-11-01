import { FC } from "react";
import { Container,  } from "@chakra-ui/react";
import { DeleteDBPopButton } from "../molecules/CustomButton";
import { BudgetDeleteProps } from "../../commons/types";


export const BudgetDelete: FC<BudgetDeleteProps> = ({ deleteDBDisclosure, ...props }) => {
  return (
    <Container>
      <DeleteDBPopButton disclosure={deleteDBDisclosure} {...props} />
    </Container>
  );
};
