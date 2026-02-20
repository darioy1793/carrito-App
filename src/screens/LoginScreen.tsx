import React, { useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { stylesGlobal } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
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
    //console.log(name,"",value);
    setformLogin({
      ...formLogin,
      [name]:value
    });
  }
    //funcion para iniciar sesion
    const handleSingIn = ():void => {
    
      console.log(formLogin);
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
          handleChangeValue={handleChangeValue}name='password' ispassword={true} />
          </View>
          <ButtonComponent buttonText='Iniciar' onPress={handleSingIn}/>
          
        </BodyComponent>
    </View>
  )
}
