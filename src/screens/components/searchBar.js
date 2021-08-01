import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

const SearchScreen = ({
  term,
  onTermChnage,
  onTermSubmit,
  placeholderName,
}) => {
  return (
    <View style={styles.background}>
      <Octicons name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholderTextColor="grey"
        placeholder={placeholderName}
        value={term}
        onChangeText={onTermChnage}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFF",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row", // makes everything aliign to the same row
    marginTop: 10,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 28,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center", // only chnages the icon alignments
    marginHorizontal: 10,
  },
});

export default SearchScreen;
