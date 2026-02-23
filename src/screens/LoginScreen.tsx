import React, { useState } from 'react'
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { stylesGlobal } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../commons/constants'
import { CommonActions, useNavigation } from '@react-navigation/native'
interface Formulario{
  email:string;
  password:string;
}
interface User{
  id:number;
  name:string;
  email:string;
  password:string;
}

export const LoginScreen = () => {
  //datos de prueba
  const users: User[] = [
    {id: 1, name:'viviana Flores', email:'vflores@gmail.com', password:'123456'},
    {id: 2, name:'Carlos Aguas', email:'caguas@gmail.com', password:'123456'}]
  //hook useState:permite gestionar el estado del formulario
  const [formLogin, setformLogin] = useState({
    email:'',
    password:'',

  });
  //hook useState: permite gestionar el estado de la contraseña
  const [hiddenPassword, sethiddenPassword] = useState<boolean>(true);

  //hook useNavigation:permite navegar de una pantalla a otra
  const navigation = useNavigation();
  //funcio<boolean>ntruecapturar los valores del formulario
  const handleChangeValue = (name:string, value:string): void =>{
    //console.log(name,"",value);
    setformLogin({
      ...formLogin,
      [name]:value
    });
  }
  //funcion para verificar que existe el usuario
  const verifyUser =() =>{
    const existUser = users.filter(user => user.email == formLogin.email && user.password == formLogin.password)[0];
    return existUser;
  }
    //funcion para iniciar sesion
    const handleSingIn = ():void => {
      //verificar q todos los coampos esten llenos
      if(formLogin.email=='' || formLogin.password ==''){
        //mensajes de alerta
        Alert.alert('Error','Campos incompletos');
        return;
      }
      //verificar si exite el usuario
      if(!verifyUser()){
        Alert.alert('Error','Usuario y/o contraseña incorrecta')
        return;
      }
    
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
          handleChangeValue={handleChangeValue}name='password' ispassword={hiddenPassword} />
          <Icon style={stylesGlobal.iconPassword} name={hiddenPassword?'visibility' : 'visibility-off'} color={TERTIARY_COLOR} size={20} onPress={()=>sethiddenPassword(!hiddenPassword)}/>
          </View>
          <ButtonComponent buttonText='Iniciar' onPress={handleSingIn}/>
          <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({name:'Register'}))}>
            <Text style={stylesGlobal.textRedirect} >No tienes una cuenta? Regístraete ahora</Text>
          </TouchableOpacity>
        </BodyComponent>
    </View>
  )
}
