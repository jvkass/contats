import { Platform } from "react-native";
import styled from "styled-components/native";

export const ProfileWrapper = styled.View`
  flex: 1;
  background-color: #FF3122;
`;

export const Header = styled.View`
  padding: 24px;
  background: #FF3122;
  flex-direction: row;
`

export const HeaderText = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 32px ${Platform.OS === "android" ? 170 : 50}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: "Poppins-Regular";
  padding: 64px 0 24px;
`;


export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #16161b;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 16px 0;
  border-top-width: 1px;
  border-color: #6e37e0;
`;

export const CreateAccountButtonText = styled.Text`
  color: #fff;
  font-family: "Poppins-Regular";
  font-size: 16px;
  margin-left: 16px;
`;
