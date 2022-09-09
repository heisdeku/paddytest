import {Dimensions, PixelRatio, Platform} from 'react-native';

// Initial screen size
const {width, height} = Dimensions.get('window');

// screen size based on Iphone X
const sWidth = 375;
const sHeight = 812;

/**
 * Resizes the initial value with the current screen size
 * @param  {string} size - The initial value
 * @return {number} - The resized value
 */

export const resize = (size, type = 'width') => {
  const newSize =
    type === 'width' ? size * (width / sWidth) : size * (height / sHeight);

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
