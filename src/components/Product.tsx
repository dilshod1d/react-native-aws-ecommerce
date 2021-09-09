import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../global/styles';
import {useNavigation} from '@react-navigation/native';
interface ProductProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}
const Product = (props: ProductProps) => {
  const navigation = useNavigation();
  const {id, title, image, avgRating, ratings, oldPrice, price} = props.item;
  const handlePress = () => {
    navigation.navigate('Product Details', {id});
  };
  return (
    <Pressable style={styles.root} key={id} onPress={handlePress}>
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
          <Text style={styles.price}>{price.toFixed(2)}</Text>
          {oldPrice && (
            <Text style={styles.oldPrice}>{oldPrice.toFixed(2)}</Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '96%',
    marginVertical: 5,
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
});
