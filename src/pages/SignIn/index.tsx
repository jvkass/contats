import React, { useCallback, useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Alert,
} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import {
  Container,
  Title,
  CreateAccountButton,
  CreateAccountButtonText,
} from "./styles";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SignInProps {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const handleSignIn = useCallback(async (data: SignInProps) => {
    try {
      const storageData = await AsyncStorage.getItem('credentials')
      const parsedStorageData = storageData !== null ? JSON.parse(storageData) : {};
      console.log(parsedStorageData)
      if (
        data.email === parsedStorageData.email
        &&
        data.password === parsedStorageData.password
      ) {
        await AsyncStorage.setItem('isLogged', 'true')
        navigation.navigate('AppRoutes')
      } else {
        Alert.alert('Login ou senha incorreto!')
      }
    } catch (e) {
      console.error(e)
    }
  }, []);

  return (
    <>
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
              <Title>Bem vindo ao Sistema X</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                placeholder="Informe o seu email"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                returnKeyType="send"
                name="password"
                placeholder="Informe a senha"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
              <Button onPress={() => navigation.navigate("SignUp")}>Cadastre-se</Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

    </>
  );
};
export default SignIn;
