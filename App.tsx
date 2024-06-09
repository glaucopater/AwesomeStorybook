import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';

import { MyButton } from './components/Button/Button';

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <MyButton onPress={() => console.log('Pressed')} text="Hello World" />
    </View>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  AppEntryPoint = require('./.ondevice').default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppEntryPoint;
