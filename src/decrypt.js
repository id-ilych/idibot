function buildMapping() {
  var a='A'.charCodeAt(0);
  var res = {};
  var from, to;

  for (var i=0; i < 13; ++i) {
    from = String.fromCharCode(i + a);
    to = String.fromCharCode(i + a + 13);
    res[from] = to;
    res[from.toLowerCase()] = to.toLowerCase();
  }
  for (var i=13; i < 26; ++i) {
    from = String.fromCharCode(i + a);
    to = String.fromCharCode(i + a - 13);
    res[from] = to;
    res[from.toLowerCase()] = to.toLowerCase();
  }
  return res;
}

var mapping = buildMapping();

function decrypt(str) {
  var chars = str.split('');
  for (var i=0; i < chars.length; ++i) {
    var c = chars[i];
    chars[i] = mapping[c] || c;
  }
  return chars.join('');
}

module.exports = decrypt;