'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setClassNameScope = setClassNameScope;
exports.getClassNameScope = getClassNameScope;

var _reactLook = require('react-look');

var scopes = {};

function setClassNameScope(prefix) {
  scopes[_reactLook._StyleContainer._defaultClassPrefix] = _reactLook._StyleContainer._className;
  _reactLook._StyleContainer._defaultClassPrefix = prefix;
  if (scopes[prefix] != null) {
    _reactLook._StyleContainer._className = scopes[prefix];
  } else {
    _reactLook._StyleContainer._className = 0;
  }
}

function getClassNameScope() {
  return _reactLook._StyleContainer._defaultClassPrefix;
}