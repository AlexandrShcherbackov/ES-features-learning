const iterateObj = (obj, acc) => {
    const iter = obj[Symbol.iterator]();
    const process = (summ = 0) => {
        const { value, done } = iter.next();
        return done ? summ : process(value + summ);
    };

    return process(acc);
}

export { iterateObj };
