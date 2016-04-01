
import { _StyleContainer } from 'react-look'

let scopes = {}

export function setClassNameScope(prefix) {
  scopes[_StyleContainer._defaultClassPrefix] = _StyleContainer._className
  _StyleContainer._defaultClassPrefix = prefix
  if (scopes[prefix] != null) {
    _StyleContainer._className = scopes[prefix]
  } else {
    _StyleContainer._className = 0
  }
}

export function getClassNameScope(){
  return _StyleContainer._defaultClassPrefix
}
