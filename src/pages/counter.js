import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { observer } from 'mobx-react/native';
import { action, autorun, autorunAsync } from 'mobx';
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

  componentDidMount() {
    // this.watchStore = autorun(() => {
    //   // console.log('神奇函数，只有访问的值变化时才会触发', this.store.feature);
    //   console.log('神奇函数，只有访问的值变化时才会触发', this.store.ticks.toJS());
    // });

    // 异步执行，500 毫秒内如果有多次变化也只执行一次，通常用来控制与后台交互频率
    this.watchStore = autorunAsync(() => {
      // console.log('神奇函数，只有访问的值变化时才会触发', this.store.feature);
      console.log('神奇函数，只有访问的值变化时才会触发', this.store.ticks.toJS());
    }, 500);
  }

  componentWillUnmount() {
    this.watchStore();
  }

  // @action.bound
  // test() {
  //   console.log(this.store);
  //   this.store.count = 10000;
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Mobx Counter</Text>
        <TouchableOpacity onPress={this.store.increment}>
          <Text style={styles.text}>|   +   | </Text>
        </TouchableOpacity>

        <Text style={styles.text}>计数器为: {this.store.feature}</Text>
        <Text style={styles.text}>计数器为: {this.store.count}</Text>
        <Text style={styles.text}>点击了: {this.store.ticksLen} 次</Text>

        <TouchableOpacity onPress={this.store.decrement}>
          <Text style={styles.text}>|   -   | </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.store.incrementAsync()}>
          <Text style={styles.text}>|   + Async   | </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.store.decrementAsync(100)}>
          <Text style={styles.text}>|   - Async   | </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}
