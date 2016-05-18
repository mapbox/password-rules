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
