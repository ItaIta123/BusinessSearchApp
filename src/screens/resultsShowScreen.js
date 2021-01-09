import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  Button,
} from "react-native";
import yelp from "../API/yelp";
import { useState, useEffect } from "react";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  // console.log(id);
  // console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    // if we cant fetch the resturant details we will just show null instead of error
    return null;
  }

  // FETCHING INFORMATION FROM THE YELP DATA:
  let isOpenNow = result.hours[0].is_open_now;
  let openHour = result.hours[0].open[0].start;
  let openHourfinal = openHour.slice(0, 2) + ":" + openHour.slice(2, 4);
  let closeHour = result.hours[0].open[0].end;
  let closeHourfinal = closeHour.slice(0, 2) + ":" + closeHour.slice(2, 4);
  let foodCategory = result.categories[0].title;
  let addressArray = result.location.display_address;
  let url = result.url;
  // console.log(result);

  return (
    <>
      <View style={styles.info}>
        {/* ******** TITLE ********* */}
        <Text
          style={{
            fontSize: 50,
            paddingTop: 10,
            textDecorationLine: "underline",
          }}
        >
          {result.name}
        </Text>

        {/* ******** OPEN NOW? ********* */}
        <Text style={{ fontSize: 26, paddingTop: 10 }}>
          {" Is open now: "}
          {isOpenNow ? (
            <Text style={{ color: "green" }}>Yes</Text>
          ) : (
            <Text style={{ color: "red" }}>No</Text>
          )}
        </Text>

        {/* ******** OPENING HOURS ********* */}
        <Text
          style={{ fontSize: 25, paddingTop: 5 }}
        >{`Opening hours: ${openHourfinal} - ${closeHourfinal}`}</Text>

        {/* ******** PHONE ********* */}
        <Text style={{ fontSize: 25, paddingTop: 5 }}>
          {`Phone Number: ${result.phone}`}
        </Text>

        {/* ******** ADDRESS ********* */}
        <Text style={{ fontSize: 25, paddingTop: 5, textAlign: "center" }}>
          {`Address: ${addressArray[0]}, ${addressArray[1]}`}
        </Text>

        {/* ******** MORE INFO ********* */}
        <TouchableOpacity onPress={() => Linking.openURL(url)}>
          <Text style={{ fontSize: 25, color: "blue", paddingTop: 5 }}>
            More Information
          </Text>
        </TouchableOpacity>
      </View>

      {/* ******** PHOTO LIST ********* */}
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 190,
    width: 280,
    margin: 15,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
  },
  info: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default ResultsShowScreen;
