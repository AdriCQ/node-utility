/**
 * useDom
 * @returns
 */
export function useDom() {
  return {
    /**
     * scrollTop
     */
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    /**
     * setTitle
     * @param title
     */
    setTitle(title: string) {
      document.title = title;
    },

    /**
     * setFavicon
     * @param favicon
     */
    setFavicon(favicon: string) {
      let link: HTMLLinkElement | null =
        document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = favicon;
    },
  };
}
