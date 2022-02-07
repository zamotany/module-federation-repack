import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
export function ReanimatedComponent({ backgroundColor }) {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 1000 }),
    };
  });

  React.useEffect(() => {
    opacity.value = 1;
  }, []);

  return (
    <Animated.View
      style={[{ width: 200, height: 200, backgroundColor }, animatedStyle]}
    />
  );
}
