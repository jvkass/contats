import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import React, { useCallback, useRef } from 'react'
import { Alert, KeyboardAvoidingView, Platform, ScrollView, TextInput, View } from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { SignUpProps } from '../SignUp'
import { ProfileWrapper, Header, HeaderText, Container, Title } from './styles'

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const emailRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const navigation = useNavigation();

  const handleSignOut = useCallback(async () => {
    try {
      await AsyncStorage.setItem('isLogged', 'false')
      navigation.navigate('SignIn')
    } catch (e) {
      console.error(e)
    }
  }, [])

  const handleChangeData = useCallback(async (data: SignUpProps) => {
    try {
      const dataToString = JSON.stringify(data)
      await AsyncStorage.setItem('credentials', dataToString)
      Alert.alert('Dados alterados com sucesso!')
      setTimeout(() => {
        navigation.navigate("Profile")
      }, 500);
    } catch (e) {
      console.error(e)
    }
  }, []);

  const handleClearStorage = useCallback(async () => {
    try {
      await AsyncStorage.clear()
      navigation.navigate('SignIn')
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <ProfileWrapper>
      <Header>
        <HeaderText>Perfil</HeaderText>
      </Header>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <View>
              <Title>Mudar as informações</Title>
            </View>
            <Form ref={formRef} onSubmit={handleChangeData}>
              <Input
                autoCorrect={true}
                autoCapitalize="words"
                name="name"
               
                placeholder="Usuário"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current?.focus()}
              />
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
       
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                returnKeyType="send"
                name="password"
          
                placeholder="Senha"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <Button color="#189943" onPress={() => formRef.current?.submitForm()}>Alterar</Button>
              <Button onPress={() => handleSignOut()}>Sair</Button>
              {/* <Button color='#bd6e07' onPress={() => handleClearStorage()}>Limpar Storage</Button> */}
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>


    </ProfileWrapper>
  )
}

export default Profile
