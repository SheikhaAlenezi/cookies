import { products } from "@/data/products";
import { StyleSheet, View } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <View style={styles.container}>
      {products.map((product, index) => (
        <ProductItem
          key={product.key}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
