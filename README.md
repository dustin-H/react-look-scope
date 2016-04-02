# react-look-scope
React-Look extension to create custom scoped classnames.

It prefixes new generated classnames with the scope name.

> react-look is a peer-dependency!

## Installation

```
npm install react-look-scope --save
```

## Usage

```js
import {setClassNameScope, getClassNameScope} from 'react-look-scope'

setClassNameScope('myScope')

let scope = getClassNameScope()

scope === 'myScope' // => true
```


## License

[MIT](LICENSE)
