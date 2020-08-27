import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity, TextInput } from 'react-native';

import firebase from '../../services/firebaseConnection';

import styles from './styles';

export default function ModalScreen({ visible, onClose, data, refresh }) {
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    await firebase.database().ref('places').child(`${data.place}`).set({
      name,
      done: false,
    });

    refresh(true);
    onClose(false);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setName(data.name)
        onClose(!visible)
      }}
    >
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoPlace}>{data.place}</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>

        <View style={styles.buttonContainer} >
          <TouchableOpacity onPress={() => handleSubmit()} style={styles.buttonSave} >
            <Text style={styles.buttonSaveText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onClose(false)} style={styles.buttonCancel} >
            <Text style={styles.buttonCancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}