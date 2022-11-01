import { FC } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { PrimaryDrawerProps } from "../../commons/types";

export const PrimaryDra: FC<PrimaryDrawerProps> = ({ isOpen, onClose, title, Body, Foot }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} size={["sm", "md", "lg"]}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>{title}</DrawerHeader>
        <DrawerCloseButton />
        <DrawerBody>{Body}</DrawerBody>
        <DrawerFooter>{Foot}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
