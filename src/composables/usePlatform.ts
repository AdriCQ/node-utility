/**
 * usePlatform
 * @returns
 */
export function usePlatform() {
  return {
    isMobile: () => window.matchMedia('(max-width: 767px)').matches,
    isDesktop: () => window.matchMedia('(min-width: 767px)').matches
  };
}
