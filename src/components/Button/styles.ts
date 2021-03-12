import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { ButtonProps } from ".";

export const ButtonWrapper = styled(RectButton) <ButtonProps>`
  min-width: 40%;
  width: 40%;
  height: 40px;
  background:#3598DC;
  margin-left:20%;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;

`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
