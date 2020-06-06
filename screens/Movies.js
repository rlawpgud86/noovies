import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => (
  <View>
    <Text>가제Movie화면</Text>
    <Button title="Movie" onPress={() => navigation.navigate("Detail")} />
  </View>
);
