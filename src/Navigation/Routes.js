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
        component={Home}
        
      />
      <Drawer.Screen
        name={NavigationStrings.EXPLORE}
        component={Explore}
        
      />
      <Drawer.Screen
        name={NavigationStrings.PROFILE}
        component={Profile}
        
      />
      <Drawer.Screen
        name='EditProfile'
        component={EditProfile}
       
      />
      <Drawer.Screen
        name='ProductDetails'
        component={ProductDetails}
        
      />
      <Drawer.Screen
        name='Search'
        component={Search}
       
      />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

