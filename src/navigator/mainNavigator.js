import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList113565Navigator from '../features/ArticleList113565/navigator';
import ArticleList113564Navigator from '../features/ArticleList113564/navigator';
import UserProfile113496Navigator from '../features/UserProfile113496/navigator';
import Tutorial113495Navigator from '../features/Tutorial113495/navigator';
import NotificationList113467Navigator from '../features/NotificationList113467/navigator';
import Settings113466Navigator from '../features/Settings113466/navigator';
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
ArticleList113565: { screen: ArticleList113565Navigator },
ArticleList113564: { screen: ArticleList113564Navigator },
UserProfile113496: { screen: UserProfile113496Navigator },
Tutorial113495: { screen: Tutorial113495Navigator },
NotificationList113467: { screen: NotificationList113467Navigator },
Settings113466: { screen: Settings113466Navigator },
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
