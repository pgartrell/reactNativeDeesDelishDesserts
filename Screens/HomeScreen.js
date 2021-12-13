import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Card, Button, Image} from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { popularProductData } from "../Data/Data";


function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <ImageBackground source={require("../assets/images/background-texture-darkPink.jpg")} style={{width:"100%"}}> 
      <SafeAreaView>
        <ScrollView>
          <Card style={styles.mainCard}>
            <Card.Title style={styles.logo}>Dees Delish Desserts</Card.Title>
            <Text style={styles.wantABite}>Want a bite?</Text>
            <Card.Divider />
            <Card.Image style={styles.cardImage}
              source={require("../assets/images/goldenCheescake.jpg")}
            />
          </Card>
          <Button style={styles.contactButton}           
            buttonStyle={{
              borderRadius: 3,
              marginTop: 20,
              marginLeft: 50,
              marginRight: 50,
              marginBottom: 20,
              type: "outline",
              color: "#DC143C"
            }}
            title="Click for Contact Info"
          />
          <PopularProducts />
        </ScrollView>
      </SafeAreaView>
      </ImageBackground>
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
      <View style={styles.popularProductHeaderView}>
        <Text style={styles.popularProductHeaderText}>Popular Products</Text>
      </View>
      {list()}
    </View>
  );
};

const styles = StyleSheet.create({
  mainCard:{
    alignSelf: "stretch",
    width: 100,
    marginBottom: 50
  },
  cardImage:{
    width: 400,
    height: 400,
  },
  homeContainer: {
    backgroundColor: "pink",
  },
  wantABite: {
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
    flex: 0.3,
  },
  popularProductHeaderView:{
    backgroundColor: "#DC143C", 
    flex: 0.3,
    paddingLeft: 100, 
    paddingRight: 100,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 3

  },
  popularProductHeaderText:{
    fontSize: 22,
    fontWeight: "bold"

  },

});

export default HomeScreen;
