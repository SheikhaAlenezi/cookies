import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}> Cookies & Beyond</Text>
      <Text style={{ fontSize: 20 }}>Where cookies maiacs gather</Text>

      <Image
        style={{ width: 300, height: 300 }}
        source={{
          uri: "https://img.freepik.com/premium-vector/bakery-shop-building-facade-with-signboard-baking-store-cafe-bread-pastry-dessert-shop-showcases-with-various-bread-cakes-products_169241-3309.jpg?w=2000",
        }}
      />
    </View>
  );
}

// const styles = StyleSheet({
//   container: {},
// });
