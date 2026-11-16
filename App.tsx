
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import MainCard from './MainCard';

const firstName = 'Bryan';
const lastName = 'Almonte';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Hello World by {firstName} {lastName}
      </Text>

      <MainCard loading={isLoading} />

      <Button
        title={isLoading ? 'Mostrar' : 'Cargar'}
        onPress={toggleLoading}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    gap: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
