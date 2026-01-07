import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


type Product = {
  id: string;
  name: string;
  price: string;
};

const productsToDisplay: Product[] = [
  { id: 'P01', name: 'Smartphone Nova X', price: '499 €' },
  { id: 'P02', name: 'Laptop Pro 15"', price: '1 199 €' },
  { id: 'P03', name: 'Casque Bluetooth AirSound', price: '149 €' },
  { id: 'P04', name: 'Montre Connectée FitTrack', price: '199 €' },
  { id: 'P05', name: 'Clavier Mécanique MX Blue', price: '89 €' },
  { id: 'P06', name: 'Souris Gamer LaserX', price: '59 €' },
  { id: 'P07', name: 'Écran 27" UltraHD', price: '349 €' },
  { id: 'P08', name: 'Disque SSD 1 To', price: '129 €' },
  { id: 'P09', name: 'Routeur WiFi 6', price: '179 €' },
  { id: 'P10', name: 'Casque VR Immersion', price: '399 €' },
];

type ProductItemProps = {
  name: string;
  price: string;
};

function ProductItem({ name, price }: ProductItemProps) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemPrice}>{price}</Text>
    </View>
  );
}

export default function ProductList() {
  const renderProductItem = ({
    item,
    index,
  }: {
    item: Product;
    index: number;
  }) => {
    return (
      <ProductItem
        name={`${index + 1}. ${item.name}`}
        price={item.price}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Catalogue TechMarket</Text>

      <FlatList
        data={productsToDisplay}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEFEE',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
    marginRight: 10,
  },
  itemPrice: {
    fontSize: 16,
    color: '#EE9972',
    fontWeight: 'bold',
  },
});