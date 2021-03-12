import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import { ButtonWrapper, ButtonText } from "./styles";

export interface ButtonProps extends RectButtonProperties {
  children: string
  color: string
}

const Button: React.FC<ButtonProps> = ({ color = '#6e37e0', children, ...rest }) => {
  return (
    <ButtonWrapper color={color} {...rest} style={{ borderRadius: 10 }}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
