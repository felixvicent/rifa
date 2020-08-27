import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import firebase from '../../services/firebaseConnection';

import Modal from '../../components/Modal';

import styles from './styles';

export default function PlaceItem({ data, refresh }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDone = async () =>  {
    await firebase.database().ref('places').child(data.place).set({
      name: data.name,
      done: !data.done,
    });

    refresh(true);
  }

  return (
    <>
      <Modal visible={ modalVisible } onClose={ setModalVisible } data={ data } refresh={ refresh } />
      <View style={styles.container} >
        <Text style={styles.placeNumber} >{data.place}</Text>
        <TouchableOpacity
          onPress={ handleDone }
          style={[styles.checkContainer, data.done ? { borderColor: '#00aa00', backgroundColor: '#00aa00' } : {}]}
        >
          <Icon name='done' color='#eee' size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => setModalVisible(true) } >
          <View style={styles.placeName} >
            <Text style={styles.placeNameText} >{data.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={ styles.borderBottom }/>
    </>
  );
}