import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import ResultsList from "./resultsList";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.listLayOut}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.placeNme}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  placeNme: {
    fontSize: 14,
    fontWeight: "bold",
  },
  listLayOut: {
    marginLeft: 15,
  },
});
export default ResultsDetail;
