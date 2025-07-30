import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
const Header = () => {
  const [visitors, setVisitors] = useState(1);
  return (
    <View style={styles.container}>
      <Text style={StyleSheet.title}>Cookies & Beyound</Text>
      <Text style={StyleSheet.subtitle}>Where cookies maniacs gather</Text>
      <View style={StyleSheet.visitorRow}>
        <Text style={StyleSheet.visitorText}>
          {visitors} {visitors === 1 ? "person has" : "people have"} visited
        </Text>
        <Button
          title="Visit"
          color="#0000ff"
          onPress={() => setVisitors(visitors + 1)}
        />
      </View>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/35/70/e3/3570e369cccb288774f2ea1adc6f5b55.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  visitorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  visitorText: {
    marginRight: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});
export default Header;
