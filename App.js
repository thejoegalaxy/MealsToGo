import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';

//const isAndroid = Platform.OS === 'android';
console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 16, backgroundColor: 'green' }}>
          <Text>search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: 'blue' }}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  search: {
    flex: 0.05,
    backgroundColor: 'green',
    padding: 10,
  },
  list: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10,
  },
});
