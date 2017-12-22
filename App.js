import React from 'react';
import { StyleSheet, Text, UINavigationController } from 'react-native';
import { BrowserRouter as Router, Link } from 'react-router-native';

const link = [
  'test',
  'test2',
  'test4',
  't32',
];

export default class App extends React.Component {
  state = {
    complex: null
  };

  componentDidMount() {
    fetch('https://api.pik.ru/v1/block?types=1,2&metadata=1&statistics=1&images=1&locations=2,3')
      .then(res => res.json())
      .then(complex => this.setState({ complex }))
  }

  render() {
    const { complex } = this.state;
    return (
      <Router style={styles.container}>
        { link.map((item) => <Link to={ item }>{ item }</Link>) }
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
