import { blockVisibility, hoistingTest } from "./features/1_theme_let_const";
import arrowFunction from "./features/2_theme_arrow_functions";
import {
  iterateObj,
  fibonacci,
  fibonacciGen,
  fibonacciVariance,
} from "./features/3_generators_iterators";
import Person from "./features/4_reflect";
import { obj, sym } from "./features/5_symbols";

import regeneratorRuntime from "regenerator-runtime";

window.blockVisibility = () => {
  try {
    blockVisibility();
  } catch {
    throw "variables declared throuth let do not work outside code block which they were declared";
  }
};

window.hoistingTest = () => {
  try {
    return hoistingTest();
  } catch {
    throw "variables declared throuth let do not hosting";
  }
};

window.arrowFunction = () => {
  arrowFunction.old();
  arrowFunction.arrow();
  arrowFunction.timeoutOld();
  arrowFunction.timeoutArrow();
};

window.iterratorTest = () => {
  const arr = [1, 2, 3, 4, 5];
  const testArr = iterateObj(arr);

  const str = "test";
  const testString = iterateObj(str, "");

  return { arr: testArr, string: testString };
};

window.testReflect = () => {
  class TalesHero {
    author = "Mark Twen";
  }

  console.log(new Person("Tom", "Soyer", 14));
  console.log(Reflect.construct(Person, ["Tom", "Soyer", 14], TalesHero));
};

window.fibonacciTest = (n) => {
  function* generateSequence(end) {
    for (let i = 0; i < end; i++) {
      const res = fibonacci(i);
      yield res;
    }
  }

  console.log(...generateSequence(n));
  console.log(...fibonacciGen(n));
  console.log(fibonacciVariance(n));
};

window.symbolsTest = () => {
  console.log(obj); // { bar: 'bar' }
  console.log(sym in obj); // true
  console.log(obj[sym]); // foo
  console.log(Object.keys(obj)); // ['bar']
  console.log(Reflect.ownKeys(obj)); //["bar", Symbol()]
};
