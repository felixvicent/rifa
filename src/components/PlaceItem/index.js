import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default function PlaceItem({ data }) {
  return (
    <>
      <View style={styles.container} >
        <Text style={styles.placeNumber} >{data.place}</Text>
        <TouchableOpacity
          style={[styles.checkContainer, data.done ? { borderColor: '#00aa00', backgroundColor: '#00aa00' } : {}]}
        >
          <Icon name='done' color='#eee' size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => alert(data.name) } >
          <View style={styles.placeName} >
            <Text style={styles.placeNameText} >{data.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={ styles.borderBottom }/>
    </>
  );
}