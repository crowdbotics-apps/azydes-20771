import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings113458Navigator from '../features/Settings113458/navigator';
import UserProfile113456Navigator from '../features/UserProfile113456/navigator';
import UserProfile113425Navigator from '../features/UserProfile113425/navigator';
import Tutorial113424Navigator from '../features/Tutorial113424/navigator';
import NotificationList113396Navigator from '../features/NotificationList113396/navigator';
import Settings113395Navigator from '../features/Settings113395/navigator';
import Settings113387Navigator from '../features/Settings113387/navigator';
import UserProfile113385Navigator from '../features/UserProfile113385/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings113458: { screen: Settings113458Navigator },
UserProfile113456: { screen: UserProfile113456Navigator },
UserProfile113425: { screen: UserProfile113425Navigator },
Tutorial113424: { screen: Tutorial113424Navigator },
NotificationList113396: { screen: NotificationList113396Navigator },
Settings113395: { screen: Settings113395Navigator },
Settings113387: { screen: Settings113387Navigator },
UserProfile113385: { screen: UserProfile113385Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
