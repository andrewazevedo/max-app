import { StackNavigator } from 'react-navigation';
import Home from './pages/home';
import Tickets from './pages/tickets';

const AppNavigator = StackNavigator({
  home: { screen: Home },
  tickets: { screen: Tickets },
});

export default AppNavigator;
