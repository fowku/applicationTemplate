import { observable, action } from 'mobx';

class DefaultStore {
  @observable something: boolean = true;

  @action.bound
    toggleSomething() {
      this.something = !this.something;
  }
}

export default new DefaultStore();