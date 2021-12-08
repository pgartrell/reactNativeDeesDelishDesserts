import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Icon, Image, Header } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { popularProductData } from "../Data/Data";

function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <SafeAreaView>
        <ScrollView>
          <Card>
            <Card.Title style={styles.logo}>Dees Delish Desserts</Card.Title>
            <Text style={styles.aboveButton}>Want a bite?</Text>
            <Card.Divider />
            <Card.Image
              source={require("../assets/images/goldenCheescake.jpg")}
            />
          </Card>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginTop: 20,
              marginLeft: 50,
              marginRight: 50,
              marginBottom: 20,
            }}
            title="Contact"
          />
          <PopularProducts />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const PopularProducts = () => {
  const list = () => {
    return popularProductData.map((product) => {
      return (
        <View key={product.img} style={styles.popularProductView}>
          <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "bold" }}>
            {product.name}
          </Text>
          <Text style={{ marginTop: 10 }}>{product.desc}</Text>
          <Image
            style={{ marginTop: 10 }}
            source={product.img}
            style={{ width: 200, height: 200 }}
          />
        </View>
      );
    });
  };
  return (
    <View style={styles.popularProductView}>
      <Header
        containerStyle={{backgroundColor: "#FF1493", justifyContent:"space-evenly"}}
        placement="center"
        leftComponent={{ color: "#fff" }}
        centerComponent={{ text: "Popular Products", style: { color: "black", fontSize: 20, fontWeight: "bold" } }}
        // rightComponent={{ color: "#fff" }}
      />
      {list()}
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer:{
    backgroundColor: "pink"
  },
  aboveButton: {
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  logo: {
    fontSize: 30,
    fontWeight: "bold",
  },
  popularProductView: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
