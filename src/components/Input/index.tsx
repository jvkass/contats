import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback
} from "react";
import { TextInputProps } from "react-native";
import { InputWrapper, InputText, Icon } from "./styles";
import { useField } from "@unform/core"

interface InputProps extends TextInputProps {
  name: string
  icon: string
}

interface InputValueReference {
  value: string
}

interface InputRef {
  focus(): void
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null)
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputValueRef.current.value)

  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    }
  }))

  return (
    <InputWrapper>
      <Icon name={icon} size={20} color="#666360" />
      <InputText
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value
        }}
        {...rest}
      />
    </InputWrapper>
  );
};

export default forwardRef(Input);
