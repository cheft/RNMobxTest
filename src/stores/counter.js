import { useStrict, observable, action } from 'mobx';
import axios from 'axios';

useStrict(true);

export default class Counter {
  @observable count = 0;

  @action.bound
  increment() {
    console.log(this);
    this.count += 1;
  }

  @action.bound
  decrement() {
    this.count -= 1;
  }

  @action
  incrementAsync(num) {
    // setTimeout(() => {
    //   this.count += num;
    // }, 1000);
    setTimeout(function() {
      this.count += num;
    });
  }

  @action
  async decrementAsync() {
    console.log(this);
    const result = await axios.get('http://localhost:8081/');
    console.log(result.data.length);
    this.count += result.data.length;
  }
}
