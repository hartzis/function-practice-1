var lastLetter = function(s) {
    return s[s.length - 1];
};

var square = function(num) {
    return num * num;
};

var negate = function(num) {
    return -num;
};

var toArray = function(stringIn) {
    var nA = [];
    for (key in arguments) {
        nA.push(arguments[key]);
    };
    return nA;
};

var startsWithA = function(strI) {
    return strI[0].toLowerCase() === 'a';
};

var excite = function(strI) {
    return strI + "!!!";
};

var sun = function(strI) {
    return strI.toLowerCase().search('sun') >= 0;
};

var tiny = function(num) {
    return num >= 0 && num <= 1;
};

var getSeconds = function(time1) {
    return (+(time1.split(':')[0]) * 60) + (+(time1.split(':')[1]));
};