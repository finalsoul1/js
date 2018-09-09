'use strict';
// es6 기능 : 블록 스코프 변수 선언

// es6 기능 : 객체 분해

function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;

  console.log(subject + ' ' + verb + ' ' + object + '.');
}

var sentences = [{ subject: 'I', verb: 'love', object: 'you' }, { subject: 'You', verb: 'love', object: 'me' }];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var s = _step.value;

    say(s);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}