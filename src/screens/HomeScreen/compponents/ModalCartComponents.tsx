import React from 'react'
import { FlatList, Modal, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { Cart, Product } from '../HomeScreen';
import Icon from '@expo/vector-icons/MaterialIcons';
import { stylesGlobal } from '../../../theme/appTheme';

interface Props{    
    isVsisible:boolean;
    cart:Cart[];//arreglo con los productos en el carrito de compras
    hiddenModal:()=>void;//funcion para ocultar el modal del carrito de compras
}

export const ModalCartComponents = ({isVsisible,cart,hiddenModal}:Props) => {
    const {width} = useWindowDimensions();
    //funcion para calcular el total de la compra
    const totalPay = ():number => {
        let total:number = 0;
        cart.forEach(product => {
            total += product.total;
        });
        return total;
    }
    //funcion para realizar la compra
    const handleBuy = ():void => {
        //aqui se podria realizar la logica para procesar el pago y finalizar la compra
        hiddenModal();
        
    }


  return (
    <Modal visible={isVsisible} animationType='fade' transparent={true}>
        <View style={stylesGlobal.containerModal}>
            <View  style={{...stylesGlobal.bodyModal,width:width*0.8}}>
              <View style={stylesGlobal.headerModal}>
            <Text style={stylesGlobal.titleModal}>Mis Productos</Text>
            <View>
              <Icon
                name="cancel"
                size={30}
                color="black"
                onPress={hiddenModal}/>
            </View>
          </View>
          <View style={stylesGlobal.headerTabla}>
            <Text style={{...stylesGlobal.headerTextTable, marginHorizontal:10}}>Producto</Text>
            <View style={stylesGlobal.headerDescription}>
            <Text style={{...stylesGlobal.headerTextTable, marginHorizontal:10}}>Pre.</Text>
            <Text style={{...stylesGlobal.headerTextTable, marginHorizontal:10}}>Cant.</Text>
            <Text style={{...stylesGlobal.headerTextTable, marginHorizontal:10}}>Total</Text>
            </View>
          </View>
           <FlatList
            data={cart}
            renderItem={({item})=>
                <View style={stylesGlobal.headerTabla}>
                <Text>{item.name} </Text>
                    <View style={stylesGlobal.headerDescription}>
                <Text style={{marginLeft:10}}>{item.price.toFixed(2)} </Text>
                <Text style={{marginLeft:25}}> {item.quantity} </Text>
                <Text style={{marginLeft:10}}> ${item.total.toFixed(2)}   </Text>
                </View>
                </View>
                }
                
            keyExtractor={item => item.id.toString()}/>
            <View style={stylesGlobal.containerTotalPay}>
                <Text style={stylesGlobal.textTotalPay}>Total a Pagar: ${totalPay().toFixed(2)}</Text>
            </View>
             <TouchableOpacity style={stylesGlobal.button} onPress={hiddenModal}>
                        <Text style={stylesGlobal.buttonText}>Comprar</Text>
            </TouchableOpacity>
             </View>
        </View>

    </Modal>
  )
}
