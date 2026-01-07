import ProductList from '@/components/ProductList';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#EDEFEE',
  },
});
