import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{cardStyle:{backgroundColor:'#1a7284'}}}>
      <Stack.Screen name="Login"
      options={{headerShown:false}} component={LoginScreen} />
      <Stack.Screen name="Register"
      options={{headerShown:false}} component={RegisterScreen} />
      
    </Stack.Navigator>
  );
}