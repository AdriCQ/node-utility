export function useDefaults(params: Params | undefined) {
  return {
    handleImageError(event: Event) {
      const imageElement = event.target as HTMLImageElement;
      imageElement.src =
        params?.image ??
        'https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg';
    },
  };
}

interface Params {
  image?: string;
}
