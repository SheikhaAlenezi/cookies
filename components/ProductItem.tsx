import { products } from "@/data/products";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductItem = () => {
  const product = products[0];
  return (
    <View style={styles.productCard}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text>{product.name}</Text>
      <Text>Price: kd{product.price.toFixed(3)}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productCard: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 5,
  },
});
