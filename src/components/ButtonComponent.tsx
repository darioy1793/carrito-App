import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'

interface Props {
    buttonText:string;
}

export const ButtonComponent = ({buttonText}:Props) => {
  return (
    <TouchableOpacity style={stylesGlobal.button}>
        <Text style={stylesGlobal.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}
