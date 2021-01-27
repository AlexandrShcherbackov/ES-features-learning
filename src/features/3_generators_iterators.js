const iterateObj = (obj, acc) => {
  const iter = obj[Symbol.iterator]();
  const process = (summ = 0) => {
    const { value, done } = iter.next();
    return done ? summ : process(value + summ);
  };

  return process(acc);
};

const fibonacci = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }

  const iter = (a, b, step) => {
    const currentFib = a + b;

    if (step === n) {
      return currentFib;
    }

    return iter(b, currentFib, step + 1);
  };

  return iter(0, 1, 2);
};

const fibonacciGen = (n) => ({
  from: 0,
  to: n,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      oneStepPrev: 0,
      twoStepPrev: 0,
      next() {
        if (this.current < this.last) {
          const currObj = {
            value: this.oneStepPrev + this.twoStepPrev,
            done: false,
          };

          this.twoStepPrev = this.oneStepPrev;
          this.oneStepPrev = this.current === 0 || this.current === 1
            ? this.current
            : currObj.value;

          this.current = this.current + 1;

          return currObj;
        } else {
          return { done: true };
        }
      },
    };
  },
});

const fibonacciVariance = (n) => {
    function* gen(curr = 0, lastOne = 0, lastTwo = 0) {
        const value = lastOne + lastTwo;
        yield value;
        if (curr < n) {
            yield gen(
                curr + 1,
                curr === 0 || curr === 1 ? curr : value,
                lastOne
            );
        }
    }

    return [...gen()];
}

export { iterateObj, fibonacci, fibonacciGen, fibonacciVariance };
