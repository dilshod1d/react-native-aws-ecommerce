import React from 'react';
import {View, FlatList, Text} from 'react-native';
import cart from '../data/cart';
import CartItem from '../components/CartItem';
import {colors} from '../global/styles';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const CartScreen = ({}) => {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0,
  );
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate('Address');

  return (
    <View>
      <View>
        <Text style={{fontSize: 18, width: '96%', alignSelf: 'center'}}>
          Subtotal: ({totalItems} items):
          <Text style={{color: colors.orange, fontWeight: 'bold'}}>
            ${totalPrice.toFixed(2)}
          </Text>
        </Text>
        <Button
          text="Proceed to checkout"
          onPress={handlePress}
          containerStyles={{backgroundColor: '#FF9900'}}
        />
      </View>
      <FlatList
        data={cart}
        renderItem={({item}) => (
          <View>
            <CartItem cartItem={item} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CartScreen;
