import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../components/home/index';
import ArtworksScreen from '../components/artworks/index';
import SpecialOfferScreen from '../components/special-offer/index';
import {HOME, ARTWORKS, SPECIAL_OFFER} from './constants';

export const AppStack = createStackNavigator({
  [HOME]: {
    screen: HomeScreen
  },
  [ARTWORKS]: {
    screen: ArtworksScreen
  },
  [SPECIAL_OFFER]: {
    screen: SpecialOfferScreen
  }
});
