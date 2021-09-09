import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, ActivityIndicator, ScrollView} from 'react-native';
// import product from '../data/product';
import {Picker} from '@react-native-picker/picker';
import {useId} from 'react-id-generator';
import QuantitySelector from '../components/QuantitySelector';
import Button from '../components/Button';
import ImageCarousel from '../components/ImageCarousel';
import {useRoute, useNavigation} from '@react-navigation/native';
import {DataStore, Auth} from 'aws-amplify';
import {Product, CartProduct} from '../models';

const ProductDetailsScreen = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const optionId = useId();
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined,
  );
  const [count, setCount] = useState(1);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params.id).then(setProduct);
  }, [route.params?.id]);

  useEffect(() => {
    if (product?.options) {
      setSelectedOption(product.options[0]);
    }
  }, [product]);

  const onAddToCart = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    if (!product || !userData) {
      return;
    }

    const newCartProduct = new CartProduct({
      userSub: userData.attributes.sub,
      count,
      option: selectedOption,
      productID: product.id,
    });

    await DataStore.save(newCartProduct);
    navigation.navigate('Cart');
  };

  if (!product) {
    return <ActivityIndicator />;
  }
  return (
    <ScrollView>
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarousel images={product.images} />
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => {
          setSelectedOption(itemValue);
        }}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} key={optionId} />
        ))}
      </Picker>
      <Text style={styles.price}>
        from ${product.price.toFixed(2)}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector count={count} setCount={setCount} />
      <Button
        text="Add to cart"
        onPress={onAddToCart}
        containerStyles={{backgroundColor: '#FF9900'}}
      />
      <Button text="Buy Now" onPress={() => {}} />
    </ScrollView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {},
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    textDecorationColor: 'red',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
});
