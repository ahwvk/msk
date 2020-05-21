var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(type) {
return typeof type;
} : function(obj) {
return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _0x861e = ["manual", "3 days", "=[^;]+", "i", "match", "cookie", "=", "split", "undefined", "getDate", "setDate", "; expires=", "toGMTString", "; path=/", "moot", "", "link", "getElementsByTagName", "toLowerCase", "rel", "getAttribute", "alternate stylesheet", "title", "disabled", "push", "random", "length", "floor", "getElementById", "mysheet", "type", "select-one", "options", "value", "tagName", "OPTION", "selected", "checked", "eachtime", "sessiononly", "mysheet_s", "mysheet_s=", "search",
"mysheet_r", "mysheet_r_days"];
var manual_or_random = _0x861e[0];
var randomsetting = _0x861e[1];
function getCookie(name) {
var revvedRx = new RegExp(name + _0x861e[2], _0x861e[3]);
if (document[_0x861e[5]][_0x861e[4]](revvedRx)) {
return document[_0x861e[5]][_0x861e[4]](revvedRx)[0][_0x861e[7]](_0x861e[6])[1];
}
return null;
}
function setCookie(c_name, value, name) {
var expected_date2 = new Date;
var _0x2915xb = (typeof name === "undefined" ? "undefined" : _typeof(name)) != _0x861e[8] ? expected_date2[_0x861e[10]](expected_date2[_0x861e[9]]() + parseInt(name)) : expected_date2[_0x861e[10]](expected_date2[_0x861e[9]]() - 5);
document[_0x861e[5]] = c_name + _0x861e[6] + value + _0x861e[11] + expected_date2[_0x861e[12]]() + _0x861e[13];
}
function deleteCookie(name) {
setCookie(name, _0x861e[14]);
}
function setStylesheet(title, css) {
var _j;
var person;
var bonusTraitModifiers = [_0x861e[15]];
_j = 0;
for (; person = document[_0x861e[17]](_0x861e[16])[_j]; _j++) {
if (person[_0x861e[20]](_0x861e[19])[_0x861e[18]]() == _0x861e[21] && person[_0x861e[20]](_0x861e[22])) {
person[_0x861e[23]] = true;
bonusTraitModifiers[_0x861e[24]](person);
if (person[_0x861e[20]](_0x861e[22]) == title) {
person[_0x861e[23]] = false;
}
}
}
if ((typeof css === "undefined" ? "undefined" : _typeof(css)) != _0x861e[8]) {
var trait = Math[_0x861e[27]](Math[_0x861e[25]]() * bonusTraitModifiers[_0x861e[26]]);
bonusTraitModifiers[trait][_0x861e[23]] = false;
}
return (typeof css === "undefined" ? "undefined" : _typeof(css)) != _0x861e[8] && bonusTraitModifiers[trait] != _0x861e[15] ? bonusTraitModifiers[trait][_0x861e[20]](_0x861e[22]) : _0x861e[15];
}
function chooseStyle(styletitle, days) {
if (document[_0x861e[28]]) {
setStylesheet(styletitle);
setCookie(_0x861e[29], styletitle, days);
}
}
function indicateSelected(element) {
if (selectedtitle != null && (element[_0x861e[30]] == undefined || element[_0x861e[30]] == _0x861e[31])) {
element = element[_0x861e[30]] == _0x861e[31] ? element[_0x861e[32]] : element;
var previousXSymbol = 0;
for (; previousXSymbol < element[_0x861e[26]]; previousXSymbol++) {
if (element[previousXSymbol][_0x861e[33]] == selectedtitle) {
if (element[previousXSymbol][_0x861e[34]] == _0x861e[35]) {
element[previousXSymbol][_0x861e[36]] = true;
} else {
element[previousXSymbol][_0x861e[37]] = true;
}
break;
}
}
}
}
if (manual_or_random == _0x861e[0]) {
var selectedtitle = getCookie(_0x861e[29]);
if (document[_0x861e[28]] && selectedtitle != null) {
setStylesheet(selectedtitle);
}
} else {
if (manual_or_random == _0x861e[25]) {
if (randomsetting == _0x861e[38]) {
setStylesheet(_0x861e[15], _0x861e[25]);
} else {
if (randomsetting == _0x861e[39]) {
if (getCookie(_0x861e[40]) == null) {
document[_0x861e[5]] = _0x861e[41] + setStylesheet(_0x861e[15], _0x861e[25]) + _0x861e[13];
} else {
setStylesheet(getCookie(_0x861e[40]));
}
} else {
if (randomsetting[_0x861e[42]](/^[1-9]+ days/i) != -1) {
if (getCookie(_0x861e[43]) == null || parseInt(getCookie(_0x861e[44])) != parseInt(randomsetting)) {
setCookie(_0x861e[43], setStylesheet(_0x861e[15], _0x861e[25]), parseInt(randomsetting));
setCookie(_0x861e[44], randomsetting, parseInt(randomsetting));
} else {
setStylesheet(getCookie(_0x861e[43]));
}
}
}
}
}
}
;
