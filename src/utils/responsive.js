import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// We base our scaling on a standard iPhone 11/12/13 size (approx 390 width)
const scale = SCREEN_WIDTH / 390;

export function normalizeSize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}