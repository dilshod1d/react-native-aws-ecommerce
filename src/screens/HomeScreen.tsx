import React from 'react';
import {View, FlatList} from 'react-native';
import Product from '../components/Product';
import products from '../data/products';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({item}) => <Product item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
