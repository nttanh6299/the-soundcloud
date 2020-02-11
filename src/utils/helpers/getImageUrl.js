import { IMAGE_SIZE } from '../../constants/GlobalConstants';

// sample url: https://i1.sndcdn.com/artworks-000064260922-w3cv4b-large.jpg

export function getImageUrl(url, size = '') {
  if (!url) return null;

  switch (size) {
    case IMAGE_SIZE.XLARGE:
      return url.replace('large', IMAGE_SIZE.XLARGE);
    case IMAGE_SIZE.LARGE:
      return url.replace('large', IMAGE_SIZE.LARGE);
    default:
      return url;
  }
}
