import styled from "styled-components/native";
import FeatherIcon from "react-native-vector-icons/Feather";

export const InputWrapper = styled.View`
  width: 260px;
  height: 40px;
  padding: 0 16px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 16px;
`;
