const blockVisibility = () => {
    if (true) {
        let test = 'abc';
    }

    return test;
}

const hoistingTest = () => {
    //referense error
    console.log(test);

    const test  = 'abc';;
    return test;
}

export { blockVisibility, hoistingTest };