import React from 'react';
import {View, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NavigatorsContainer from './src/Navigators/NavigatorsContainer';
import Amplify from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import config from './src/aws-exports';
Amplify.configure(config);
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigatorsContainer />
    </View>
  );
};

export default withAuthenticator(App);
