import { action, makeAutoObservable, observable } from "mobx";

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this, {
      count: observable,
      setCount: action,
    });
  }

  setCount(str) {
    if (str === "inc") this.count += 1;
    else if (str === "dec") {
      if (this.count > 0) this.count -= 1;
    }
  }
}

export const counterStore = new CounterStore();
