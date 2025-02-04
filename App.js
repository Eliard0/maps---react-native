import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button, StyleSheet, Text, TouchableOpacity, View,Platform
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import MapView, { Marker } from 'react-native-maps';

function App() {
  const [region, setRegion] = useState(null)

  async function requestLocationPermission() {
    const permission =
      Platform.OS == 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  
    const result = await request(permission);
    console.log(result)
  
    if (result == RESULTS.GRANTED) {
      return true;
    } else {
      Alert.alert('Permissão Negada', 'Você precisa permitir o acesso à localização.');
      return false;
    }
  }

  function moveCidade(lat, log) {
    setRegion({
      latitude: lat,
      longitude: log,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    })
  }

  async function getLocation() {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) return;
    console.log("chamou")
  
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      (error) => Alert.alert('Erro ao obter localização', error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  
  useEffect(()=>{
    getLocation()
  },[])

  return (
    <View style={styles.sectionContainer}>
      <MapView
        // mapType='standard' | satellit | hybrid
        style={{ height: 450, width: '100%' }}
        region={region}
        showsTraffic={true}
        showsUserLocation
        cameraZoomRange={16}
      />

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
        <View style={{alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity style={styles.moveCityButton} onPress={() => getLocation()}>
            <Text style={styles.textButtonMoveCity}>Pegando minha localização</Text>
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
    flexDirection: 'row',
  },

  moveCityButton: {
    backgroundColor: '#228FE9',
    paddingHorizontal: 10,
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


