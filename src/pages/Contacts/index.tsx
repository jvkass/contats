import React, { useEffect, useState } from 'react'
import { ContactsWrapper, Header, HeaderText, ContactsList, ItemList, Avatar, Name, Highlight } from './styles'
import { PermissionsAndroid, Text } from 'react-native';
import Contacts from 'react-native-contacts';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';


const MyContacts: React.FC = () => {
  const [contacts, setContacts] = useState<any>([])

  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.READ_CONTACTS;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  const loadContacts = async () => {
    if (await hasAndroidPermission()) {
      Contacts.getAll().then(contacts => {
        setContacts(contacts)
      })
    }
    return
  };

  const handleContactsToStore = async (item: any) => {
    try {
      const storageContacts = await AsyncStorage.getItem('savedContacts')
      const parsedStorageData = storageContacts !== null ? JSON.parse(storageContacts) : [];


      await AsyncStorage.setItem('savedContacts', JSON.stringify([...parsedStorageData, item]))
    } catch (e) {
      console.error(e)
    }
  }


  useEffect(() => {
    hasAndroidPermission()
  }, [])

  useEffect(() => {
    loadContacts()
  }, [hasAndroidPermission])


  return (
    <ContactsWrapper>
      <Header>
        <HeaderText>Contatos da agenda</HeaderText>
      </Header>
      <ContactsList
        data={contacts}
        keyExtractor={(item: any) => item.recordID}
        renderItem={({ item }: any) => {
          return (
            <ItemList>
              <Name style={{ marginRight: 'auto' }}>{item.givenName} {item.middleName} {item.familyName}</Name>
              <TouchableOpacity >
                <Icon
                  onPress={() => handleContactsToStore(item)}
                  name="plus-circle"
                  color="#fff"
                  size={26}
                />
              </TouchableOpacity>
            </ItemList>
          )
        }} />
    </ContactsWrapper>
  )
}

export default MyContacts
