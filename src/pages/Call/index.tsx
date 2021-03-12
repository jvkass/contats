import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useState } from 'react'
import { CallWrapper, Header, HeaderText, ItemList, Avatar, Name, CallList, WelcomeText } from './styles'
import { useIsFocused } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Feather';
import { Linking } from 'react-native'


const Call: React.FC = () => {
  const [contactsToCall, setContactsToCall] = useState([])
  const isFocused = useIsFocused()
  const [username, setUsername] = useState()

  const getSavedContacts = useCallback(async () => {
    try {
      const storageContacts = await AsyncStorage.getItem('savedContacts')
      const parsedStorageData = storageContacts !== null ? JSON.parse(storageContacts) : null;
      console.log(parsedStorageData)
      setContactsToCall(parsedStorageData)
    } catch (e) {
      console.error(e)
    }
  }, []);

  const getName = useCallback(async () => {
    try {
      const storageData = await AsyncStorage.getItem('credentials')
      const parsedStorageData = storageData !== null ? JSON.parse(storageData) : {};
      setUsername(parsedStorageData.name)

    } catch (e) {
      console.error(e)
    }
  }, []);

  useEffect(() => {
    getName()
  }, [isFocused])


  useEffect(() => {
    getSavedContacts()
  }, [isFocused])

  return (
    <CallWrapper>
      <Header>
        <HeaderText>Contatos de Emergência</HeaderText>
      </Header>
      <CallList
        data={contactsToCall}
        keyExtractor={(item: any, index) => item.recordID + index}
        renderItem={({ item }: any) => {
          return (
            <ItemList onPress={() => Linking.openURL(`tel:${item.phoneNumbers.map(p => p.number)[0]}`)}>
              <Name style={{ marginRight: 'auto' }}>{item.givenName} {item.middleName} {item.familyName}</Name>
            </ItemList>
          )
        }} />
    </CallWrapper>
  )
}

export default Call
