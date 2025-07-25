import * as KeepAwake from 'react-native-keep-awake';

import { Button, Platform, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text>HOW TO USE THIS DEMO</Text>
        <Text>1. Turn up your screen brightness</Text>
        <Text>
          2. Change your device display settings to dim as quickly as possible
        </Text>
        <Text>
          3. Have fun using the buttons below to control whether or not your
          device dims/sleeps quickly!
        </Text>
        {Platform.OS === 'ios' && (
          <Text>
            Note: On iOS, you may need to disconnect your device from XCode to
            see the effects
          </Text>
        )}
      </View>
      <Button
        title="Activate"
        onPress={() => {
          KeepAwake.activate();
        }}
      />
      <Button
        title="Deactivate"
        onPress={() => {
          KeepAwake.deactivate();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
  },
  instructions: {
    margin: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
