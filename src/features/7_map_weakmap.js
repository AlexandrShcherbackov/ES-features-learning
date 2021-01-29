const testMap = new Map(
    [
        ['one', 1],
        ['two', 2],
    ]
);

testMap.set({ threee: 3}, 3);

const testWeakMap = new WeakMap(
    [
        [{ 1: 1}, 1],
    ]
);

export { testMap, testWeakMap };