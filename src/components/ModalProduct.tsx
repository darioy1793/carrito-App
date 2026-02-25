import React, { useState } from "react";
import {Image,Modal,Text,TouchableOpacity,useWindowDimensions,View,} from "react-native";
import { Product } from "../screens/HomeScreen/HomeScreen";
import { stylesGlobal } from "../theme/appTheme";
import Icon from "@expo/vector-icons/MaterialIcons";

interface Props {
  isVisible: boolean; //mostrar o no el modal
  item: Product; //producto seleccionado para mostrar en el modal
  hiddenModal: () => void; //funcion para ocultar el modal
}

export const ModalProduct = ({ isVisible, item, hiddenModal }: Props) => {
  const { width } = useWindowDimensions();

  //funcion para el contador de cantidad de productos a agregar al carrito
  const [quantity, setQuantity] = useState<number>(1);

  //funcion para validar el stock disponible del producto
 
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={stylesGlobal.containerModal}>
        <View style={{ ...stylesGlobal.bodyModal, width: width * 0.8 }}>
          <View style={stylesGlobal.headerModal}>
            <Text style={stylesGlobal.titleModal}>{item.name} - ${item.price.toFixed(2)}</Text>
            <View>
              <Icon
                name="cancel"
                size={30}
                color="black"
                onPress={hiddenModal}/>
            </View>
          </View>
          <View>
            <Image source={{ uri: item.pathImage }} style={stylesGlobal.imageModal} />
          </View>|
          {
            (item.stock === 0) ?
            <Text style={stylesGlobal.textStock}>Producto Agotado</Text>
            :<>
            <View style={stylesGlobal.containerQuantity}>
            <TouchableOpacity style={stylesGlobal.buttonQuantity} onPress={() => setQuantity(quantity -1)}
                disabled={quantity === 1}>
                <Text style={stylesGlobal.buttonQuantityText} >-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesGlobal.buttonQuantity}>
                <Text style={stylesGlobal.buttonQuantityText}>{quantity}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesGlobal.buttonQuantity} onPress={() => setQuantity(quantity +1)}>
                <Text style={stylesGlobal.buttonQuantityText} >+</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center', marginVertical:10}}>
            <Text style={stylesGlobal.textTotal}>Total: ${(item.price * quantity).toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={stylesGlobal.button}>
            <Text style={stylesGlobal.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
            </>

          }
          
        </View>
      </View>
    </Modal>
  );
};
