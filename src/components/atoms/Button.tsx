import { FC } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  ButtonProps,
  ComponentWithAs,
  forwardRef,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  // Portal,
  UseDisclosureReturn,
} from "@chakra-ui/react";

const BaseButto = forwardRef<Omit<ButtonProps, "size">, "button">((props, ref) => {
  return <Button {...props} size={["xs", "sm", "md"]} ref={ref} />;
});

export const PrimaryButton = forwardRef<Omit<ButtonProps, "colorScheme">, "button">((props, ref) => {
  return <BaseButto {...props} colorScheme="green" ref={ref} />;
});

export const SecondaryButton = forwardRef<Omit<ButtonProps, "colorScheme">, "button">((props, ref) => {
  return <BaseButto {...props} colorScheme="red" ref={ref} />;
});

export const PrimaryPopButton: FC<{
  TriggerButton: ComponentWithAs<"button", Omit<ButtonProps, "children" | "colorScheme">>;
  footerButtons: Array<{ Component: FC<{ onClick?: ButtonProps["onClick"] }>; callback: () => void }>;
  title: string;
  message: string;
  popButtonDisclosure: UseDisclosureReturn;
  isDisabled?: boolean;
}> = ({ title, TriggerButton, message, footerButtons, popButtonDisclosure, isDisabled = false }) => {
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
                <Component
                  key={i}
                  onClick={() => {
                    callback();
                    onClose();
                  }}
                />
              ))}
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Box>
    </Popover>
  );
};
