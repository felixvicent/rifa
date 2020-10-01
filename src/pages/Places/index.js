import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-community/clipboard';

import firebase from '../../services/firebaseConnection';
import generatePlaces from '../../utils/generatePlaces';

import PlaceItem from '../../components/PlaceItem';

import styles from './styles';

export default function Places() {
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const [filter, setFilter] = useState(false);
  const [places, setPlaces] = useState([false]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setPlaces(generatePlaces(users));
  }, [users]);

  useEffect(() => {
    async function loadList() {
      setLoading(true);
      await firebase.database().ref('places').once('value', snapshot => {
        setUsers([]);

        snapshot.forEach(childItem => {
          if (childItem.key > 0 && childItem.val()) {
            let list = {
              place: childItem.key,
              name: childItem.val().name,
              done: childItem.val().done,
            };

            setUsers(oldArray => [...oldArray, list]);
            setLoading(false);
          }
        })
      })

      setLoading(false);
    }

    loadList();
    setRefresh(false);

  }, [refresh])

  const generateList = item => {
    if (filter) {
      if (item.name) {
        return null;
      }
      else {
        return <PlaceItem data={item} refresh={setRefresh} />
      }
    }
    else {
      return <PlaceItem data={item} refresh={setRefresh} />
    }
  }

  const sharePlace = () => {
    const freePlaces = places.filter(place => place.name === '');

    let free = '';

    freePlaces.map(place => {
      if(!free.length){
        free = free + place.place
      }
      else{
        free = free + `, ${place.place}`;
      }
    });

    Clipboard.setString(free);
  }

  return (
    <>
      <View style={styles.container} >
        <View style={styles.header} >
          <Text style={styles.headerTitle} >{filter ? 'Lugares disponiveis' : 'Todos os lugares'}</Text>
          <View style={ styles.headerButtons } >
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => sharePlace()} >
              <Icon name='external-link' color='#fff' size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter(!filter)} >
              <Icon name={filter ? 'eye-slash' : 'eye'} color='#fff' size={30} />
            </TouchableOpacity>
          </View>
        </View>

        {loading ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <ActivityIndicator color='#b8cad4' size={50} />
          </View>
        ) : (
            <FlatList
              data={places}
              keyExtractor={item => `${item.place}`}
              renderItem={({ item }) => generateList(item)}
              removeClippedSubviews={false}
            />
          )}
      </View>
    </>
  );
}