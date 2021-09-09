import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import ProductItem from '../components/Product';
// import products from '../data/products';
import {DataStore} from 'aws-amplify';
import {Product} from '../models';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    DataStore.query(Product).then(setProducts);
  }, []);
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
