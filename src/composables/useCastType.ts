/**
 * useCast
 * @param p
 * @returns
 */
export function useCast<T = unknown>(p: unknown) {
  return p as T;
}
