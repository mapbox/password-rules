!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.passwordRules=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(pw, rules) {
    var issues = [];
    rules = rules || {};
    def(rules, 'minimumLength', 8);
    def(rules, 'requireCapital', true);
    def(rules, 'requireLower', true);
    def(rules, 'requireNumber', true);

    if (pw.length < rules.minimumLength) {
        issues.push({
            reason: 'minimumLength',
            message: 'Password must be at least ' + rules.minimumLength + ' letters long',
            part: 'be at least ' + rules.minimumLength + ' letters long'
        });
    }
    if (rules.requireCapital && !pw.match(/[A-Z]/g)) {
        issues.push({
            reason: 'requireCapital',
            message: 'Password must contain a capital letter',
            part: 'contain a capital letter'
        });
    }
    if (rules.requireLower && !pw.match(/[a-z]/g)) {
        issues.push({
            reason: 'requireLower',
            message: 'Password must contain a lowercase letter',
            part: 'contain a lowercase letter'
        });
    }
    if (rules.requireNumber && !pw.match(/\d/g)) {
        issues.push({
            reason: 'requireNumber',
            message: 'Password must contain a number',
            part: 'contain a number'
        });
    }

    return issues.length ? {
        sentence: sentence(issues),
        issues: issues
    }: false;

    function sentence(reasons) {
        var start = 'Password must ';
        if (reasons.length === 1) {
            return start + reasons[0].part + '.';
        }
        if (reasons.length === 2) {
            return start + reasons[0].part + ' and ' + reasons[1].part + '.';
        }
        if (reasons.length > 2) {
            var last = reasons[reasons.length - 1].part;
            return start + reasons.slice(0, -1).map(function(r) {
                return r.part;
            }).join(', ') + ', and ' + last + '.';
        }
    }
};

function def(o, option, val) {
    if (o[option] === undefined) o[option] = val;
}

},{}]},{},[1])
(1)
});