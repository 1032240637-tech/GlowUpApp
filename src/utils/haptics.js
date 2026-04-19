/* Haptic feedback utilities */
export const haptics = {
  light() {
    if (navigator.vibrate) navigator.vibrate(10);
  },
  medium() {
    if (navigator.vibrate) navigator.vibrate(25);
  },
  heavy() {
    if (navigator.vibrate) navigator.vibrate(50);
  },
  success() {
    if (navigator.vibrate) navigator.vibrate([10, 50, 20]);
  },
  error() {
    if (navigator.vibrate) navigator.vibrate([50, 30, 50]);
  },
  tap() {
    if (navigator.vibrate) navigator.vibrate(5);
  }
};
