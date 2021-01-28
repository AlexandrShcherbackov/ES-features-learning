const parent = {
    test() {
        console.log('parent');
    }
};

const child = {
    test() {
        super.test();
        console.log('child');
    },
};

Object.setPrototypeOf(child, parent);

export default child;