#recursive-json-key-transform

Apply a string transformation recursively to all keys in a JSON-compatible object.

[![NPM](https://nodei.co/npm/recursive-json-key-transform.png)](https://npmjs.org/package/recursive-json-key-transform)

##Installation

```
npm install recursive-json-key-transform
```

##Usage

```javascript
/**
 * ES6/ES2015 syntax
 */
import recursiveJSONKeyTransform from 'recursive-json-key-transform';

const convertAllKeysFromPascalCaseToCamelCase = (
  recursiveJSONKeyTransform((str) => {
    return str[0].toLowerCase() + str.slice(1);
  })
);

const data = { Data1: { FieldA: 1, FieldB: false },
               Data2: [ { FieldC: "hello" } ] };

const camelCaseData = convertAllKeysFromPascalCaseToCamelCase(data);

console.log(camelCaseData);
/**
 * prints:
 * { data1: { fieldA: 1, fieldB: false },
 *   data2: [ { fieldC: 'hello' } ] }
 *
 */
```

`recursiveJSONKeyTransform` accepts one argument, a transformer function that accepts a string and returns a string. The result of `recursiveJSONKeyTransform(transformerFn)` is *another* function, which accepts a JSON-compatible JavaScript object. It returns a deep copy of that object with all object keys transformed according to the specified transformer function (including objects nested inside of arrays).

Any object will work, but if it contains JSON-incompatible properties (e.g. functions), they will be ignored (or interpreted as empty objects). The module's intended use is for JSON responses from APIs, which may contain object keys in a format different than your application's convention.
