/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useRef} from 'react';
import {Animated, Text} from 'react-native';

const Toast = ({duration = 1000, height = 100, show = false, onHide, text}) => {
  const animatedValue = useRef(new Animated.Value(0));
  const [timeoutId, setTimeoutId] = useState(null);

  const showToast = () => {
    Animated.timing(animatedValue.current, {toValue: 1, duration: 350}).start();
    const id = setTimeout(() => hideToast?.(), duration + 350);
    setTimeoutId(id);
  };

  const hideToast = () => {
    clearTimeout(timeoutId);
    Animated.timing(animatedValue.current, {toValue: 0, duration: 350}).start();
    setTimeout(() => onHide?.(false), 350);
  };

  useEffect(() => {
    if (show) {
      showToast();
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [show]);

  const y = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-height, 0],
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 9999,
        transform: [{translateY: y}],
        backgroundColor: '#0c7962',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 45,
        paddingVertical: 20,
        paddingHorizontal: 15,
      }}>
      <Text style={{color: 'white', fontFamily: 'NormDemi', fontSize: 12}}>
        Your response has been sent and you'd be notified soon
      </Text>
    </Animated.View>
  );
};

export default Toast;
