const isArray = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

const recursiveJSONKeyTransform = transformer => obj => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (isArray(obj)) {
    return obj.map(o => recursiveJSONKeyTransform(o));
  }
  return Object.keys(obj).reduce((prev, curr) => {
    prev[transformer(curr)] = recursiveJSONKeyTransform(obj[curr]);
    return prev;
  }, {});
};

module.exports = recursiveJSONKeyTransform;
