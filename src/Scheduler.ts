import { FIVE_SECONDS } from "./constants";

class Scheduler {
  private timeout: NodeJS.Timeout | null;
  private interval;
  constructor({ interval }: { interval: number }) {
    this.timeout = null;
    this.interval = interval || FIVE_SECONDS;
  }
  public async continuousRetchByInterval(callback: Function) {
    this.timeout = setTimeout(() => {
      callback();
      this.continuousRetchByInterval(callback);
    }, this.interval);
  }
  public stopRefetchByInterval() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = null;
  }
}

export default Scheduler;
