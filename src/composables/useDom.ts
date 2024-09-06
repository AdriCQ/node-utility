/**
 * useDom
 * @returns
 */
export function useDom() {
  return {
    scrollToElement(elementId: string) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        console.error('Element with id ' + elementId + ' not found.');
      }
    },
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
