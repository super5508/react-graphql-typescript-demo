import { useState } from 'react';
import { Alert, Snackbar, AlertProps, SnackbarProps } from '@mui/material';

export type UseToastState = {
  message?: AlertProps['children'];
  open: SnackbarProps['open'];
  severity?: AlertProps['severity'];
};

export type UseToastCommonProps = {
  burnToast: (message: UseToastState['message']) => void;
  makeToast: (message: UseToastState['message'], severity?: UseToastState['severity']) => void;
};

export type UseToastedMutationOpts = {
  [key: string]: any;
  errorMsg: React.ReactNode;
  onCompleted: (data: any) => void;
  onError: (data: any) => void;
  successMsg: React.ReactNode;
};

export type UseToastedMutationFunc = (
  mutation: any,
  opts: any,
) => ((...props: any[]) => Promise<void>)[];

const AUTO_HIDE_DURATION = 2000;

type UseToastFuncReturn = UseToastCommonProps & {
  toastComponent: JSX.Element;
  tossToast: () => void;
};

export const useToast = (): UseToastFuncReturn => {
  const [toastState, setToastState] = useState<UseToastState>({
    open: false,
  });

  // Shows a success toast
  const makeToast: UseToastFuncReturn['makeToast'] = (message, severity = 'success') =>
    setToastState({
      message,
      open: true,
      severity,
    });

  // Shows an error toast
  const burnToast: UseToastFuncReturn['burnToast'] = (message) => makeToast(message, 'error');

  // Closes the snackbar alert message
  const tossToast: UseToastFuncReturn['tossToast'] = () =>
    setToastState({
      open: false,
    });

  return {
    burnToast,
    makeToast,
    toastComponent: (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={AUTO_HIDE_DURATION}
        open={toastState.open}
        onClose={tossToast}
      >
        <Alert severity={toastState.severity} onClose={tossToast}>
          {toastState.message}
        </Alert>
      </Snackbar>
    ),
    tossToast,
  };
};
