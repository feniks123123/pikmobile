import React from 'react';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './src/component/Header';

const App = TabNavigator({
  Home: {
    screen: Header,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  }
});

export default App;

// const link = [
//   'test',
//   'test2',
//   'test4',
//   't32',
// ];
//
// export default class App extends React.Component {
//   state = {
//     complex: null
//   };
//
//   componentDidMount() {
//     fetch('https://api.pik.ru/v1/block?types=1,2&metadata=1&statistics=1&images=1&locations=2,3')
//       .then(res => res.json())
//       .then(complex => this.setState({ complex }))
//   }
//
//   render() {
//     const { complex } = this.state;
//     return (
//       <Router>
//         <Stack key="root">
//           <Scene key="login" component={Header} title="Header"/>
//         </Stack>
//       </Router>
//     );
//   }
// }

