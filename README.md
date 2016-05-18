[![Build Status](https://travis-ci.org/mapbox/password-rules.png)](https://travis-ci.org/mapbox/password-rules)

# password-rules

Enforce rules on passwords.

## install

    npm install --save password-rules

Or download `password-rules.js` for a browser.

## api

### `rules('pw', options)`

Options:

* `minimumLength`: default 8
* `maximumLength`: default Infinity
* `requireCapital`: default true
* `requireLower`: default true
* `requireNumber`: default true
* `requireSpecial`: default false

Returns `false` if there are no issues. Otherwise, returns an object like

```js
{ sentence: 'Password must be at least 8 letters long, contain a capital letter, contain a number, and contain a special character.',
  issues:
   [ { reason: 'minimumLength',
       message: 'Password must be at least 8 letters long',
       part: 'be at least 8 letters long' },
     { reason: 'requireCapital',
       message: 'Password must contain a capital letter',
       part: 'contain a capital letter' },
     { reason: 'requireNumber',
       message: 'Password must contain a number',
       part: 'contain a number' },
     { reason: 'requireSpecial',
       message: 'Password must contain a special character',
       part: 'contain a special character'} ] }
```
