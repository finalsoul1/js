function StringBuilder() {
    this._array = [];
    this._index = 0;
}

StringBuilder.prototype.append = function (str) {
    this._array[this._index] = str;
    this._index++;
}

StringBuilder.prototype.toString = function () {
    return this._array.join('');
}


// var StringBuffer = function() {
//     this.buffer = new Array();
// };
// StringBuffer.prototype.append = function(str) {
//     this.buffer[this.buffer.length] = str;
// };
// StringBuffer.prototype.toString = function() {
//     return this.buffer.join("");
// };

// var txt = "";
var sb = new StringBuilder();

for (var i = 0; i < 10; i++) {
    sb.append(i);
}

console.log(sb.toString());