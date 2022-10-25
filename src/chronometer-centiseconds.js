class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;

      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here

    let minutes = Math.floor(this.currentTime / 60 / 100);

    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime / 100;

    return seconds % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    if (value === 0) {
      return `00`;
    }

    if (value < 10) {
      return `0${value}`;
    }

    return `${value}`;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here

    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centi = this.computeTwoDigitNumber(this.getCentiseconds());

    console.log(`${minutes}:${seconds}:${centi}`);

    return `${minutes}:${seconds}`;
  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime % 100;
  }
}
