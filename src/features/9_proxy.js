const bimdingContext = (target, prop) => {
  const value = target[prop];
  return typeof value === "function" ? value.bind(target) : value;
};

export default (user) =>
  new Proxy(user, {
    get(target, prop) {
      return prop.startsWith("_")
        ? new Error("Private data not available")
        : bimdingContext(target, prop);
    },

    set(target, prop, value) {
      if (prop.startsWith("_")) {
        throw new Error("Can't set private props");
      } else {
        target[prop] = value;
        return true;
      }
    },

    deleteProperty(target, prop) {
      if (prop.startsWith("_")) {
        throw new Error("Can't delete private props");
      } else {
        delete target[prop];
        return true;
      }
    },

    ownKeys(target) {
      return Object.keys(target).filter((key) => !key.startsWith("_"));
    },
  });
