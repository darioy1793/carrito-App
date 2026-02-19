import React, { useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { stylesGlobal } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'

//inyterface define la estructura del objeto del formulario
interface Formulario{
  email:string;
  password:string;
}

export const LoginScreen = () => {
  //hook useState:permite gestionar el estado del formulario
  const [formLogin, setformLogin] = useState({
    email:'',
    password:'',

  });
  //funcion para capturar los valores del formulario
  const handleChangeValue = (name:string, value:string): void =>{
    console.log(name,"",value);

  }
  return (
    <View>
      <StatusBar/>
        <TitleComponent title='Iniciar Sesión'/>
        <BodyComponent>
          <Text style={stylesGlobal.titleWelcome}>Bienvenido</Text>
          <Text style={stylesGlobal.titleWelcome}>Realiza tus compras rapida y sefuras</Text>
          <View style={stylesGlobal.containerInput}> 
          <InputComponent placeholder='Correo' keyboardType='email-address' 
          handleChangeValue={handleChangeValue} name='email'/>
          <InputComponent placeholder='Contraseña' keyboardType='default'
          handleChangeValue={handleChangeValue}name='password' />
          </View>
          <ButtonComponent buttonText='Iniciar'/>
          
        </BodyComponent>
    </View>
  )
}
