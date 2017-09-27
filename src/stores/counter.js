import { observable, computed, action } from 'mobx';
import axios from 'axios';

export default class Counter {

  @observable count = 0;
  @observable ticks = [];

  @computed get feature() {
    return this.count % 2 === 0 ? '偶数': '奇数';
  }

  @computed get ticksLen() {
    return this.ticks.length;
  }

  // bound 方式不要在调用时再用箭头函数了
  @action.bound
  increment() {
    this.count++;
    this.ticks.push(1);
  }

  @action.bound
  decrement() {
    this.count--;
    this.ticks.push(-1);
  }

  // babel-plugin-mobx-deep-action 暂时不能支持 action.bound，作者会在稍后支持
  @action
  async incrementAsync() {
    const result = await axios.get('http://localhost:8081/');
    console.log(result.data.length);
    this.count += result.data.length;
    this.ticks.push(result.data.length);
  }

  @action
  decrementAsync(num) {
    setTimeout(() => {
      this.count -= num;
      this.ticks.push(-num);
    }, 1000);
  }
}
