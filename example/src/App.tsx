import * as KeepAwake from 'react-native-keep-awake';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  KeepAwake.activate();
  KeepAwake.deactivate();
  const result = KeepAwake.isActive();
  console.log('KeepAwake is active:', result);
  return (
    <View style={styles.container}>
      <Text>Is KeepAwake active? {result ? 'yes' : 'no'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
