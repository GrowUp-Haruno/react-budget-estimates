import { Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FooterLayout } from "../atoms/Layout";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Footer: FC = () => {
  return (
    <FooterLayout>
      <Text fontSize="sm">© 2022 GrowUp-Haruno</Text>
      <Link href="https://twitter.com/fullStackHaruno" fontSize="sm">
        Twitter
        <ExternalLinkIcon mx={1} fontSize='sm'/>
      </Link>
    </FooterLayout>
  );
};
