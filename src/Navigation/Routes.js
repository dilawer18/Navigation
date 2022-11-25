import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
import EditProfile from '../Screens/EditProfile/EditProfile';
import Explore from '../Screens/Explore/Explore';
import Home from '../Screens/Home/Home';
import ProductDetails from '../Screens/ProductDetails/ProductDetails';
import Profile from '../Screens/Profile/Profile';
import Search from '../Screens/Search/Search';
import TabRoutes from './TabRoutes';

const Drawer = createDrawerNavigator();

export function Routes() {
  
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen
        name={NavigationStrings.HOME}
        component={TabRoutes}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name={NavigationStrings.EXPLORE}
        component={Explore}
        options={{ drawerLabel: 'Explore' }}
      />
      <Drawer.Screen
        name={NavigationStrings.PROFILE}
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
      <Drawer.Screen
        name='EditProfile'
        component={EditProfile}
        options={{ drawerLabel: 'EditProfile' }}
      />
      <Drawer.Screen
        name='ProductDetails'
        component={ProductDetails}
        options={{ drawerLabel: 'ProductDetails' }}
      />
      <Drawer.Screen
        name='Search'
        component={Search}
        options={{ drawerLabel: 'Search' }}
      />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

