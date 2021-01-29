export default class AdultContent {
  // Приватные атрибуты класса
  #age = 0;
  #adult_content = "…is dummy example content (•)(•) —3 (.)(.) only for adults…";

  constructor(age) {
    this.#setAge(age);
  }

  // Статический приватный метод
  static #userIsAdult(age) {
    return age > 18;
  }

  // Публичное свойство
  get content() {
    return `(age: ${this.#age}) → ` + this.#allowed_content;
  }

  // Приватное свойство
  get #allowed_content() {
    if (AdultContent.#userIsAdult(this.#age)) {
      return this.#adult_content;
    } else {
      return "Sorry. Content not for you.";
    }
  }

  // Приватный метод
  #setAge(age) {
    this.#age = age;
  }

  toString() {
    return this.content;
  }
}
