var rules = require('../'),
    test = require('tap').test;

test('issues', function(t) {
    t.equal(rules('foo', {
        requireCapital: false,
        requireLower: false,
        requireNumber: false
    }).issues[0].reason, 'minimumLength', 'requires a minimum length');

    t.equal(rules('4CqKsBN7zcTzCixx59xyXlKE5VmfNW9MxcrQgGkWUEfhgfSULUjsrhD0ZEHAaagUBR8LtgeuZ', {
        requireCapital: false,
        maximumLength: 72,
        requireLower: false,
        requireNumber: false
    }).issues[0].reason, 'maximumLength', 'requires a maximum length');

    t.equal(rules('foo', {
        requireCapital: true,
        requireLower: false,
        requireNumber: false
    }).issues[1].reason, 'requireCapital', 'requires a capital letter');

    t.equal(rules('FOOBAR', {
        requireCapital: false,
        requireLower: true,
        requireNumber: false
    }).issues[1].reason, 'requireLower', 'requires a lowercase letter');

    t.equal(rules('foo', {
        requireCapital: false,
        requireLower: true,
        requireNumber: false,
        requireSpecial: true
     }).issues[1].reason, 'requireSpecial', 'requires a special character');

    t.end();
});

test('sentences', function(t) {
    t.equal(rules('foo', {
        requireCapital: false,
        requireLower: false,
        requireNumber: false,
        requireSpecial: false
    }).sentence, 'Password must be at least 8 letters long.', 'number');

    t.equal(rules('4CqKsBN7zcTzCixx59xyXlKE5VmfNW9MxcrQgGkWUEfhgfSULUjsrhD0ZEHAaagUBR8LtgeuZ', {
        requireCapital: false,
        maximumLength: 72,
        requireLower: false,
        requireNumber: false,
        requireSpecial: false
    }).sentence, 'Password must be less than 72 letters long.', 'number');

    t.equal(rules('foo', {
        requireCapital: true,
        requireLower: false,
        requireNumber: false,
        requireSpecial: false
    }).sentence, 'Password must be at least 8 letters long and contain a capital letter.', 'number');

    t.equal(rules('foo', {
        requireCapital: true,
        requireLower: false,
        requireNumber: true,
        requireSpecial: false
    }).sentence, 'Password must be at least 8 letters long, contain a capital letter, and contain a number.', 'number');

    t.equal(rules('', {
        requireCapital: true,
        requireLower: true,
        requireNumber: true,
        requireSpecial: false
    }).sentence, 'Password must be at least 8 letters long, contain a capital letter, contain a lowercase letter, and contain a number.', 'number');

    t.equal(rules('foo', {
        requireCapital: false,
        requireLower: true,
        requireNumber: false,
        requireSpecial: true
    }).sentence, 'Password must be at least 8 letters long and contain a special character.', 'number');

    t.end();
});
