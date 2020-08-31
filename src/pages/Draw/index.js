import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';

import firebase from '../../services/firebaseConnection';

import styles from './styles';

export default function Places() {
  const [users, setUsers] = useState([]);
  const [luckUser, setLuckUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);

      await firebase.database().ref('places').once('value', snapshot => {
        setUsers([]);

        snapshot.forEach(childItem => {
          if (childItem.key > 0) {
            let list = {
              place: childItem.key,
              name: childItem.val().name,
              done: childItem.val().done,
            };

            if (list.done) {
              setUsers(oldArray => [...oldArray, list]);
            }
            else {
              return;
            }
          }
        })

        setLoading(false);
      })
    }

    loadUsers();
  }, [])

  function handleDraw() {
    const size = users.length;

    const drawNumber = Math.floor(Math.random() * size);

    setLuckUser(users[drawNumber]);

    setTimeout(() => setVisibility(true), 2000);
  }

  return (
    <View style={styles.container} >
      <Modal
        visible={ visibility }
        transparent={ true }
        onRequestClose={ () => {
          setVisibility(false)
          setLuckUser({});
        } }
      >
        <View style={ styles.modalContainer } > 
          <Text style={ styles.luckyTitle } >Parabéns <Text style={ styles.luckyName } >{ luckUser && luckUser.name }</Text></Text>
          <TouchableOpacity style={ styles.closeButton } onPress={ () => {
            setVisibility(false)
            setLuckUser(null)
          } } >
            <Text style={ styles.closeButtonText } >Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {loading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
          <ActivityIndicator color='#b8cad4' size={50} />
        </View>
      ) : (
        <>
          <View style={styles.drawContainer} >
            <Text style={styles.drawNumber} >{ luckUser ? luckUser.place : '?' }</Text>
          </View>

          <TouchableOpacity style={styles.drawButton} onPress={handleDraw} >
            <Text style={styles.drawButtonText} >Sortear</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}