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
import superChild from "./features/6_super";
import { testMap, testWeakMap } from "./features/7_map_weakmap";
import AdultContent from "./features/8_classes";
import proxyObj from "./features/9_proxy";

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

window.superTest = () => {
  superChild.test();
};

window.testMap = () => {
  console.log(testMap);
  console.log(testMap.keys());
  console.log(...testMap);
  console.log(Array.from(testMap));
  console.log(testMap.values());
  console.log(Object.fromEntries(testMap.entries()));

  console.log(testWeakMap);
};

window.testClasses = () => {
  const AdultContentForKid = new AdultContent(10);

  console.log(String(AdultContentForKid));
  // (age: 10) → Sorry. Content not for you.

  console.log(AdultContentForKid.content);
  // (age: 10) → Sorry. Content not for you.

  const AdultContentForAdult = new AdultContent(25);

  console.log(String(AdultContentForAdult));
  // (age: 25) → …is dummy example content (•)(•) —3 (.)(.) only for adults…

  console.log(AdultContentForAdult.content);
  // (age: 25) → …is dummy example content (•)(•) —3 (.)(.) only for adults…
};

window.proxyTest = () => {
  const user = {
    login: 'Alex',
    email: 'test@mail.com',
    _password: '123456',
    authentificationData() {
      return {
        email: this.email,
        pass: this._password,
      }
    }
  }

  const proximiseUser = proxyObj(user);

  console.log(proximiseUser);
  console.log(proximiseUser.login);
  console.log(proximiseUser._password);

  try {
    proximiseUser._password = 'test';
  } 
  catch(e) {
    console.log(e.message);
  }

  try {
    delete proximiseUser._password;
  } 
  catch(e) {
    console.log(e.message);
  }

  console.log(proximiseUser.authentificationData());
  
};
