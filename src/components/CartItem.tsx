import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../global/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../components/QuantitySelector';
interface CartProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartItem = ({cartItem}: CartProps) => {
  const {
    quantity,
    item: {id, image, ratings, price, title, avgRating, oldPrice},
  } = cartItem;
  const [count, setCount] = useState(quantity);
  return (
    <View style={styles.root}>
      <View key={id} style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={3}>
            {title}
          </Text>
          <View style={styles.ratingContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <Icon
                style={styles.star}
                name={i < Math.floor(avgRating) ? 'star' : 'star-o'}
                size={18}
                color={colors.orange}
              />
            ))}

            <Text>{ratings}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{price}</Text>
            {oldPrice && <Text style={styles.oldPrice}>{oldPrice}</Text>}
          </View>
          <Text style={{fontSize: 18}}>Quantity: {count}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector count={count} setCount={setCount} />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '96%',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  content: {
    flex: 3,
    padding: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    textDecorationColor: 'red',
  },
  star: {
    margin: 2,
    alignItems: 'center',
  },
  quantityContainer: {
    marginVertical: 10,
  },
});
