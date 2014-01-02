var rules = require('../'),
    test = require('tap').test;

test('rules', function(t) {
    t.equal(rules('foo', {
        requireCapital: false,
        requireLower: false,
        requireNumber: false
    })[0].reason, 'minimumLength', 'requires a minimum length');

    t.equal(rules('foo', {
        requireCapital: true,
        requireLower: false,
        requireNumber: false
    })[1].reason, 'requireCapital', 'requires a capital letter');

    t.equal(rules('FOOBAR', {
        requireCapital: false,
        requireLower: true,
        requireNumber: false
    })[1].reason, 'requireLower', 'requires a lowercase letter');

    t.end();
});
