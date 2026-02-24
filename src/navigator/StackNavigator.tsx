import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

export interface User{
  id:number;
  name:string;
  email:string;
  password:string; 
}


export const StackNavigator=()=> {
  //datos de prueba
    const users: User[] = [
      {id: 1, name:'viviana Flores', email:'vflores@gmail.com', password:'123456'},
      {id: 2, name:'Carlos Aguas', email:'caguas@gmail.com', password:'123456'}]

      //hook useState:permite gestionar la lista de usuarios registrados
      const [listUsers, setlistUsers] = useState<User[]>(users); //arreglo con la lista de usuarios registrados
      //funcion para actualizar la lista de usuarios al arreglo listUsers
      const handleAddUser = (user:User):void => {
        //modificar el estado del arreglo de la laista de usuarios registrados
        setlistUsers([...listUsers, user]);
      }



  return (
    <Stack.Navigator screenOptions={{cardStyle:{backgroundColor:'#1a7284'}}}>
      <Stack.Screen name="Login"
      options={{headerShown:false}} children={() => <LoginScreen users={listUsers}/>}/>
      <Stack.Screen name="Register"
      options={{headerShown:false}} 
      children={() => <RegisterScreen listUsers={listUsers} handleAddUser={handleAddUser}/>}/>
      <Stack.Screen name="Home"
      options={{headerShown:false}} component={HomeScreen}/>

      
    </Stack.Navigator>
  );
}