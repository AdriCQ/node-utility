export function useCrypt<T = unknown>() {
  return {
    decode: (data: string): T => {
      return JSON.parse(decodeURI(atob(data))) as T;
    },
    encode: (data: T) => {
      return btoa(encodeURI(JSON.stringify(data)));
    },
  };
}
