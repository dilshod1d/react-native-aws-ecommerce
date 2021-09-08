import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import product from '../data/product';
import {Picker} from '@react-native-picker/picker';
import {useId} from 'react-id-generator';
import QuantitySelector from '../components/QuantitySelector';
import Button from '../components/Button';
import ImageCarousel from '../components/ImageCarousel';
import {useRoute} from '@react-navigation/native';

const ProductDetailsScreen = () => {
  const optionId = useId();
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [count, setCount] = useState(1);
  const route = useRoute();
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
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector count={count} setCount={setCount} />
      <Button
        text="Add to cart"
        onPress={() => {}}
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
