import Header from "@/components/Header.js";
import ProductList from "@/components/ProductList.js";
import { StyleSheet, View } from "react-native";
// import { ProductItem } from "@/components/ProductItem";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <ProductList />
      {/* <Text style={{fontWeight:'bold'}}>Cookies & Beyound</Text>
      <Text >Where cookies maniacs gather</Text>
      < Image source= {{uri:"https://i.pinimg.com/originals/35/70/e3/3570e369cccb288774f2ea1adc6f5b55.jpg"} } 
      style={{ width:200, height:200}}/> */}

      {/*       
      <View style={styles.productContainer}>
        {products.map((product) => (
          <ProductItem
          key={product.key}
          name={product.name}
          price={product.price}
          image={product.image} />
        ))}
      </View>  */}

      {/* <View style={styles.productContainer}>
      {products.map((product,index) => ( 
        <View key= {index} style={styles.productCard}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text>{product.name}</Text>
        <Text>Price: kd{product.price.toFixed(3)}</Text>
        
        </View>
      ))}
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    fontSize: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    paddingTop: 50,
  },
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
