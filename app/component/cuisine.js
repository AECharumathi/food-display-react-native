import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Card } from "react-native-elements";

const Cuisine = (props) => {
  const { menuList } = props;

  return (
    menuList.length > 0 &&
    menuList.map((cuisine, index) => {
      return cuisine.foodList.map((item, index) => {
        return (
          <View key={item.id} style={styles.user}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require("../../img/food.jpg")}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Card.Divider />
          </View>
        );
      });
    })
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderBottomColor: "#E0E0E0",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius:50,
  },
  name: {
    textAlign: "left",
    color: "#757575"
  },
});

export default Cuisine;
