import { useEffect, useState } from "react";
import yelp from "../API/yelp";

// THIS IS AN HOOK FILE THAT HELPS MY SEARCH SCRREN CODE LOOK SIMPLER.
// BASICALLY THIS FILE CONTAINS ALL THE FUNCTION WE'RE USING AT THE SEARCH SCREEN AND
// RESTURN THEM AT THE END OF THE FILE IN ORDER TO MAKE A USE OF THEM AT THE HOMESCREEN FILE
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // a helper function for an API request
  const searchAPI = async (searchItem) => {
    // console.log("check on terminal")
    try {
      const response = await yelp.get("/search", {
        // a clasic axios call
        params: {
          // Params are listed in the API documentation.
          limit: 50, // adds to the end of the URL ?limit=50
          term: searchItem, //&term=term
          location: "New Haven", //&location="Tel Aviv"
        },
      });
      setResults(response.data.businesses); // update the results variable
    } catch (err) {
      // if somthing went wrong with the API featch
      setErrorMessage("Somthing went wrong");
    }
  };

  // using useEffect to render a state only once
  // That is the default search
  useEffect(() => {
    searchAPI("");
  }, []);

  return [searchAPI, results, errorMessage];
};
