import type { AxiosError } from 'axios';
/**
 * useError
 * @returns
 */
export function useError(notifier?: INotifier) {
  function handleAxiosError(err: unknown | AxiosError, message?: string) {
    const axiosError = err as AxiosError;

    if (notifier) {
      let error = message;
      // @ts-ignore
      if (err.data && err.data.message) {
        // @ts-ignore
        error = String(err.data.message);
      }
      // @ts-ignore
      else if (axiosError.response && axiosError.response.data.message) {
        // @ts-ignore
        error = String(axiosError.response.data.message);
      } else if (axiosError.message && axiosError.message) {
        error = axiosError.message;
      }

      notifier.error(error ?? 'Ha ocurrido un error');
    }

    console.log({ axiosError: err });
  }

  return {
    handleAxiosError,
  };
}

interface INotifier {
  error: (message: string) => void;
  success: (message: string) => void;
  warning: (message: string) => void;
}
