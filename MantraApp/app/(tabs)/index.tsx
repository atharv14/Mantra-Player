import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';
import RecordButton from '../../components/RecordButton';
// import UploadButton from '../../components/UploadButton';
// import LoopCounter from '../../components/LoopCounter';
// import SaveButton from '../../components/SaveButton';

export default function RecordScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.recordContainer}>
        <RecordButton />
      </View>
      
      <View style={styles.controlsContainer}>
        {/* <UploadButton />
        <LoopCounter />
        <SaveButton /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  recordContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    width: '100%',
    gap: 20,
    paddingBottom: 20,
  },
});