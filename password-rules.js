(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.passwordRules = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(pw, rules) {
    var issues = [];
    rules = rules || {};
    def(rules, 'minimumLength', 8);
    def(rules, 'maximumLength', Infinity);
    def(rules, 'requireCapital', true);
    def(rules, 'requireLower', true);
    def(rules, 'requireNumber', true);
    def(rules, 'requireSpecial', false);

    if (pw.length < rules.minimumLength) {
        issues.push({
            reason: 'minimumLength',
            message: 'Password must be at least ' + rules.minimumLength + ' letters long',
            part: 'be at least ' + rules.minimumLength + ' letters long'
        });
    }
    if (pw.length > rules.maximumLength) {
        issues.push({
            reason: 'maximumLength',
            message: 'Password must be less than ' + rules.maximumLength + ' letters long',
            part: 'be less than ' + rules.maximumLength + ' letters long'
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
    if (rules.requireSpecial && !pw.match(/\W+/g)) {
        issues.push({
            reason: 'requireSpecial',
            message: 'Password must contain a special character',
            part: 'contain a special character'
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

},{}]},{},[1])(1)
});