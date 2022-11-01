import { useCallback, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useRegisterSW } from "virtual:pwa-register/react";
import { ReloadPromptProps } from "../types";

export const useReloadPrompt = (): ReloadPromptProps => {
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
