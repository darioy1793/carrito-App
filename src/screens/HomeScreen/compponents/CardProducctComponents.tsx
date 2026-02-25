import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../HomeScreen';
import { stylesGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ModalProduct } from '../../../components/ModalProduct';


interface Props{
  item:Product;
}

export const CardProducctComponents = ({item}:Props) => {

  //hook useState para controlar la visibilidad del modal
  const [showModal, setshowModal] = useState<boolean>(false);
  //funcion para mostrar o | ocultar el modal
  const hiddenModal = ():void => {
    setshowModal(!showModal);
  }

  return (
    <>
    <View style={stylesGlobal.containerCard}>
      <Image source={{uri:item.pathImage}} style={stylesGlobal.imageCard}/>
        <View>
        <Text style={stylesGlobal.titleCard}>{item.name}</Text>
        <Text style={stylesGlobal.textPrice}>Precio: ${item.price.toFixed(2)}</Text>
        </View>
        <View style={stylesGlobal.iconCard}>
        <Icon name="add-shopping-cart" size={30} color="green" onPress={hiddenModal} />
        </View>
    </View>
     <ModalProduct isVisible={showModal} item={item} hiddenModal={hiddenModal} />
     </>
  )
}
