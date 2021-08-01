import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultsShowScreen from "./src/screens/resultsShowScreen";
import SearchScreen from "./src/screens/searchScreen";
// createStackNavigator = Automaticly show new screens and header for each screen

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Buisness Search",
    },
  }
);

export default createAppContainer(navigator);
// createAppContainer = create react component from this file.
