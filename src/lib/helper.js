/**
 * Simple images preload
 * @param {Array} urls - array of urls
 */
export const preloadImages = (urls) => {
  urls.forEach((url) => {
    const image = new Image();
    image.src = url;
  });
};

export default preloadImages;
