/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MapView from 'react-native-maps';

function App() {
  const [region, setRegion] = useState({
    latitude: 51.5085300,
    longitude: -0.1257400,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

  function moveCidade(lat, log) {
    setRegion({
      latitude: lat,
      longitude: log,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    })
  }

  return (
    <View style={styles.sectionContainer}>
      <Text>ola mundo sim</Text>
      <Button title='mudando para frança' onPress={() => moveCidade(48.8566, 2.3522)} />
      <Button title='mudando para japão' onPress={() => moveCidade(35.682839, 139.759455)} />
      <MapView
        style={{ height: 350, width: 350 }}
        region={region}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;


