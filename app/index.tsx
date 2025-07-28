import React from "react";
import { Image, Text, View } from "react-native";

//import { products } from './products';

interface indexProps {
  name: string;
  price: number;
}
// const index = ({ name, price}: indexProps) => {
//   return {
//     <View style={styles.container}>
//     <Text> coookie,(name) price=(price )</Text>
//     </View>
//   }
// }

// export default indexProps:

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
      {/* <view>
        {products.map((product,index)=>)
        <View key ={index}> 
        <Image 
        style={{width:100,height:100}}
      source={{uri: products.image}} />
      <Text>{products.name}</Text>
      <Text> ${products.price.toFixed(2) </Text> </view>
      }} </View> */}
    </View>
  );
}
