import { FC } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  forwardRef,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { BaseButtonProps, PrimaryButtonProps, PrimaryPopButtonProps } from "../../commons/types";

const BaseButto = forwardRef<BaseButtonProps, "button">((props, ref) => {
  return <Button {...props} size={["xs", "sm", "md"]} ref={ref} />;
});

export const PrimaryButton = forwardRef<PrimaryButtonProps, "button">((props, ref) => {
  return <BaseButto {...props} colorScheme="green" ref={ref} />;
});

export const SecondaryButton = forwardRef<PrimaryButtonProps, "button">((props, ref) => {
  return <BaseButto {...props} colorScheme="red" ref={ref} />;
});

export const PrimaryPopButton: FC<PrimaryPopButtonProps> = ({
  title,
  TriggerButton,
  message,
  footerButtons,
  popButtonDisclosure,
  isDisabled = false,
}) => {
  const { isOpen, onToggle, onClose } = popButtonDisclosure;

  return (
    <Popover
      placement="top"
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={onClose}
      closeOnBlur={false}
      closeOnEsc={false}
    >
      <PopoverTrigger>
        <TriggerButton onClick={onToggle} w="full" isDisabled={isDisabled} />
      </PopoverTrigger>
      <Box>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">{title}</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>{message}</PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              {footerButtons.map(({ Component, callback }, i) => (
                <Component key={i} onClick={callback} />
              ))}
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Box>
    </Popover>
  );
};
