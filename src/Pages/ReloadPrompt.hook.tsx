import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

export type ReloadPromptType = {
  onUpdateOk: () => void;
  reloadModalDisclosure: UseDisclosureReturn;
};

export const useReloadPrompt = (): ReloadPromptType => {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered() {},
    onRegisterError() {},
  });
  const reloadModalDisclosure = useDisclosure();

  const onUpdateOk = useCallback(() => {
    (async () => {
      await updateServiceWorker(true);
    })();
  }, []);

  useEffect(() => {
    if (needRefresh) reloadModalDisclosure.onOpen();
  }, [needRefresh]);
  return {
    onUpdateOk,
    reloadModalDisclosure,
  };
};
