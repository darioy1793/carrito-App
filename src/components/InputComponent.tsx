import React from 'react'
import { KeyboardTypeOptions, TextInput } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'

interface Props {
    placeholder:string;
    keyboardType:KeyboardTypeOptions;
    handleChangeValue:(name:string, value:string) => void;
    name:string;
    ispassword?:boolean;//propiedad opcional para indicar si el input es de contraseña

}

export const InputComponent = ({placeholder, keyboardType,handleChangeValue,name,ispassword=false}:Props) => {
  return (
    <TextInput placeholder={placeholder}
    keyboardType={keyboardType}
    onChangeText={(value)=> handleChangeValue(name,value)}
    secureTextEntry={ispassword}//si el nombre del input es password, se oculta el texto
    style={stylesGlobal.input}/>
  )
}