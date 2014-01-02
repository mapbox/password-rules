# password-rules

Enforce rules on passwords.

## install

    npm install --save password-rules

## api

### `rules('pw', options)`

Options:

* `minimumLength`: default 8
* `requireCapital`: default true
* `requireLower`: default true
* `requireNumber`: default true

Returns `false` if there are no issues or an array of objects in the form

```js
{
    reason: 'requireNumber',
    message: 'Password must contain a number'
}
```
