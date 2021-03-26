import { useState, useContext, createContext } from 'react';

const dialogContext = createContext();

export function DialogProvider({ children }) {
  const dialog = useDialogProvider();

  return (
    <dialogContext.Provider value={dialog}>{children}</dialogContext.Provider>
  );
}

export function useDialog() {
  return useContext(dialogContext);
}

function useDialogProvider() {
  let [showDialog, setShowDialog] = useState(false);

  function open() {
    return setShowDialog(true);
  }

  function close() {
    return setShowDialog(false);
  }
  return {
    showDialog,
    open,
    close,
  };
}
