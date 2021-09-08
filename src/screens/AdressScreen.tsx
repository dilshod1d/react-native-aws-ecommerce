import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Button from '../components/Button';
import regions from '../data/region';

const AdressScreen = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [addressError, setAddressError] = useState('');
  const onCheckout = () => {
    if (addressError) {
      Alert.alert('Fix all the field errors before submitting!');
      return;
    }
    if (!fullName) {
      Alert.alert('Please fill in the full name field!');
    }
    if (!phone) {
      Alert.alert('Please fill in the phone number field!');
    }
  };
  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('Address is to short');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Text>Hello</Text>
          <Picker
            selectedValue={selectedRegion}
            onValueChange={changedRegion => setSelectedRegion(changedRegion)}>
            {regions.map(region => (
              <Picker.Item value={region} label={region} key={region} />
            ))}
          </Picker>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onEndEditing={validateAddress}
            onChangeText={text => {
              setAddress(text);
              setAddressError('');
            }}
          />
          {!!addressError && <Text style={styles.error}>{addressError}</Text>}
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>
        <Button text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AdressScreen;

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 2,
  },
  error: {
    color: 'red',
  },
});
