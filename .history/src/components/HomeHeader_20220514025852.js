import { View, Text } from "react-native";
import React from "react";

export default function HomeHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: SIZES.base,
        backgroundColor: COLORS.white,
        elevation: 1,
        
    >
      <Text>HomeHeader</Text>
    </View>
  );
}
