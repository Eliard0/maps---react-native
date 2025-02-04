import React, { useState } from 'react';
import {
  Button, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

function App() {
  const [region, setRegion] = useState({
    latitude: 51.5085300,
    longitude: -0.1257400,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
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
      <MapView
        // mapType='standard' | satellit | hybrid
        style={{ height: 450, width: '100%' }}
        region={region}
        showsTraffic={true}
      >
        <Marker image={require('./src/images/carro.png')} coordinate={{
          latitude: 51.5085300,
          longitude: -0.1257400,
        }}>
          <Text>ola mundo sim</Text>
          <View style={{ width: 150, backgroundColor: 'red', height: 150, opacity: 0.2 }}></View>
        </Marker>

      </MapView>
      <View>
        <Text style={styles.title}>Selecione um botão abaixo para mudar a localização</Text>
        <View style={styles.viewButtons}>
          <TouchableOpacity style={styles.moveCityButton} onPress={() => moveCidade(48.8566, 2.3522)} >
            <Text style={styles.textButtonMoveCity}>Mudando para frança</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moveCityButton} onPress={() => moveCidade(35.682839, 139.759455)}>
            <Text style={styles.textButtonMoveCity}>Mudando para japão</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center'
  },

  title: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },

  viewButtons: {
    flexDirection: 'row'
  },

  moveCityButton: {
    backgroundColor: '#228FE9',
    width: '45%',
    height: 45,
    marginHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
   textButtonMoveCity: {
    color: '#fff', 
    fontWeight: 'bold'
   }
});

export default App;


