import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { observer } from 'mobx-react/native';
import CounterStore from '../stores/counter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});

@observer
export default class CounterUI extends Component {
  store = new CounterStore();

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Mobx Counter</Text>
        <TouchableHighlight onPress={this.store.increment}>
          <Text style={styles.text}>|   +   | </Text>
        </TouchableHighlight>

        <Text style={styles.text}>Clicked: {this.store.count} times</Text>

        <TouchableHighlight onPress={this.store.decrement}>
          <Text style={styles.text}>|   -   | </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.store.incrementAsync(5)}>
          <Text style={styles.text}>|   + Async   | </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.store.decrementAsync(5)}>
          <Text style={styles.text}>|   - Async   | </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
