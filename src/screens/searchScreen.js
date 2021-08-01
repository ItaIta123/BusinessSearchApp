import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../screens/components/searchBar"; //component
// import yelp from '../screens/API/yelp'
import useResults from "../hooks/useResults"; // a hook usage
import ResultsList from "./components/resultsList"; //component

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [LocationTerm, setLocationTerm] = useState("");
  const [searchAPI, results, errorMessage] = useResults();

  // console.log(results)
  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };
  // The Home Screen
  // flex is used to making the whole containers fill only the visiable page

  return (
    // <View style = {{ flex: 1 }}>  That's the usaul way we learned to disply a group of elements in the same screen.
    // This is the new way. It helps us not to worry about how the elemnts fit into the disply: (Only <> and </>)
    <>
      {/* Search Bar component */}

      <SearchBar
        placeholderName="Business or Food name"
        term={term}
        onTermChnage={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchAPI(term)} // when click enter - use this helper function
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      {/* <Text>We have found {results.length} results</Text> just to check if the API works */}

      {/* // the lists: */}

      <ScrollView>
        <ResultsList title="Cheap" results={filterResultsByPrice("$")} />

        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />

        <ResultsList title="Expensive" results={filterResultsByPrice("$$$")} />

        <ResultsList
          title="Very Expensive"
          results={filterResultsByPrice("$$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  pageStyle: {
    marginLeft: 10,
  },
});

export default SearchScreen;
