const isArray = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

const recursiveJSONKeyTransform = (transformer) => {
  const recursiveTransform = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
    if (isArray(obj)) {
      return obj.map(o => recursiveTransform(o));
    }
    return Object.keys(obj).reduce((prev, curr) => {
      prev[transformer(curr)] = recursiveTransform(obj[curr]);
      return prev;
    }, {});
  };
  return recursiveTransform;
};

module.exports = recursiveJSONKeyTransform;
