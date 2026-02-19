import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';

const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{cardStyle:{backgroundColor:'#1a7284'}}}>
      <Stack.Screen name="Login"
      options={{headerShown:false}} component={LoginScreen} />
      
    </Stack.Navigator>
  );
}