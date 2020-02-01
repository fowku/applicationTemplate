import { observable, action } from 'mobx';

class DefaultStore {
  @observable something = true;

  @action.bound
  toggleSomething(): void {
    this.something = !this.something;
  }
}

export default new DefaultStore();
