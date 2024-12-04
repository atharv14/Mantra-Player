import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { useState, useRef } from 'react';
import { useColorScheme } from 'react-native';
import Colors from '../constants/Colors';

export default function RecordButton() {
  const [isRecording, setIsRecording] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const handlePress = () => {
    setIsRecording(!isRecording);
    
    // Button press animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: colors.record },
          isRecording && styles.recording
        ]}
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <Text style={styles.text}>
          {isRecording ? 'TAP TO STOP' : 'TAP TO RECORD'}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  recording: {
    opacity: 0.8,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});