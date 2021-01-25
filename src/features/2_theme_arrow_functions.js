//old
function old() {
    return console.log('old', this);
};

const arrow = () => console.log('arrow', this);

const test = {
    str: 'abc',
    old,
    arrow,
    timeoutOld() {
        setTimeout(old, 1000);
    },
    timeoutArrow() {
        setTimeout(() => console.log('arrow', this), 1000);
    },
};

export default test;