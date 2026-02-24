import React, { useState } from "react";
import {
  Alert,
  Text,
  TextInputComponent,
  TouchableOpacity,
  View,
} from "react-native";
import { TitleComponent } from "../components/TitleComponent";
import { BodyComponent } from "../components/BodyComponent";
import { InputComponent } from "../components/InputComponent";
import { stylesGlobal } from "../theme/appTheme";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { ButtonComponent } from "../components/ButtonComponent";
import { User } from "../navigator/StackNavigator";

interface FormRegister {
  name: string;
  email: string;
  password: string;
}

//interface para  definir las propiedades del usuario
interface Props {
  listUsers: User[]; //arreglo con la lista de usuarios registrados desde el StackNavigator
  handleAddUser: (users: User) => void; //funcion para actualizar la lista de usuarios registrados
}

export const RegisterScreen = ({ listUsers, handleAddUser }: Props) => {
  const navigation = useNavigation();

  //hook useState:permite gestionar el estado del formulario
  const [formRegister, setformRegister] = useState<FormRegister>({
    name: "",
    email: "",
    password: "",
  });
  //funcio<boolean>ntruecapturar los valores del formulario
  const handleChangeValue = (name: string, value: string): void => {
    //modificar el estado del formulario
    setformRegister({
      ...formRegister,
      [name]: value,
    });
  };
  //funcion para verificar si exite el usuario
  const verifyUser = () => {
    const existUser = listUsers.filter(
      (user) => user.email == formRegister.email,
    )[0];
    return existUser;
  };

  //funcion para generar los ids de los usuarios registrados
  const getIdUser = (): number => {
    const getId = listUsers.length + 1;
    return getId;
  };
  //funcion para registrar usuario
  const handleRegister = (): void => {
    //console.log(formRegister);
    //verificar q todos los coampos esten llenos
    if (
      formRegister.name == "" ||
      formRegister.email == "" ||
      formRegister.password == ""
    ) {
      //mensajes de alerta
      Alert.alert("Error", "Campos incompletos");
      return;
    }
    //verificar si exite el usuario
    if (verifyUser()) {
      Alert.alert("Error", "El usuario ya existe");
      return;
    }
    //Registro de usuario
    //crear el objeto usuario
    const newUser: User = {
      id: getIdUser(),
      name: formRegister.name,
      email: formRegister.email,
      password: formRegister.password,
    };
    //agregar el objeto al arreglo
    handleAddUser(newUser);
    //mensaje de alerta
    Alert.alert("Exito", "Usuario registrado correctamente");
    //redireccionar a la pantalla de login
    navigation.goBack();
  };
  return (
    <View>
      <TitleComponent title="Registro de usuario" />
      <BodyComponent>
        <Text style={stylesGlobal.titleWelcome}>Bienvenido</Text>
        <Text style={stylesGlobal.textRedirect}>
          Completa el formulario para crear tu cuenta
        </Text>
        <View style={stylesGlobal.containerInput}>
          <InputComponent
            placeholder="Nombre"
            keyboardType="default"
            handleChangeValue={handleChangeValue}
            name="name"
          />
          <InputComponent
            placeholder="Email"
            keyboardType="email-address"
            handleChangeValue={handleChangeValue}
            name="email"
          />
          <InputComponent
            placeholder="Password"
            keyboardType="default"
            handleChangeValue={handleChangeValue}
            name="password"
          />
          <ButtonComponent buttonText="Registrar" onPress={handleRegister} />
          <TouchableOpacity
            onPress={() =>
              navigation.dispatch(CommonActions.navigate({ name: "Login" }))
            }
          >
            <Text style={stylesGlobal.textRedirect}>
              ¿Ya tienes una cuenta? Inicia sesión ahora
            </Text>
          </TouchableOpacity>
        </View>
      </BodyComponent>
    </View>
  );
};
