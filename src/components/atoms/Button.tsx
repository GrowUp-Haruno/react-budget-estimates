import { FC } from "react";
import {
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
  useDisclosure,
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
}> = ({ title, TriggerButton, message, footerButtons }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Popover placement="top" returnFocusOnClose={false} isOpen={isOpen} onClose={onClose} closeOnBlur={false}>
      <PopoverTrigger>
        <TriggerButton onClick={onToggle} />
      </PopoverTrigger>
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
            {/* <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red">Apply</Button> */}
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
