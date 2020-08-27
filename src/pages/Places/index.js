import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import generatePlaces from '../../utils/generatePlaces';

import PlaceItem from '../../components/PlaceItem';

import styles from './styles';

export default function Places() {
  const [filter, setFilter] = useState(false);
  const [places, setPlaces] = useState([false]);
  const [users, setUsers] = useState([
    { place: 1, done: true, name: 'Félix Vicente' },
    { place: 2, done: false, name: 'Juca Caxias' },
    { place: 30, done: true, name: 'Nana Caxias' },
  ]);

  useEffect(() => {
    setPlaces(generatePlaces(users));
  }, [users]);

  const generateList = (item) => {
    if(filter){
      if(item.name){
        return null;
      }
      else {
        return <PlaceItem data={ item } />
      }
    }
    else {
      return <PlaceItem data={ item } />
    }
  }
  
  return (
    <View style={ styles.container } >
      <View style={ styles.header } >
        <Text style={ styles.headerTitle } >{ filter ? 'Lugares disponiveis' : 'Todos os lugares' }</Text>
        <TouchableOpacity onPress={ () => setFilter(!filter) } >
          <Icon name={ filter ? 'eye-slash' : 'eye' } color='#fff' size={ 30 } />
        </TouchableOpacity>
      </View>
      <FlatList
        data={ places }
        keyExtractor={ item => item.key }
        renderItem={ ({ item }) => generateList(item) }
      />
    </View>
  );
}