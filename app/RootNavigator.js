import { createStackNavigator, createAppContainer } from "react-navigation";
import CandyList from './components/CandyList';
import CandyDetail from './components/CandyDetail';

const AppNavigator = createStackNavigator({
  Home: {
    screen: CandyList
  },
  Detail: {
    screen: CandyDetail
  }
});

export default createAppContainer(AppNavigator);