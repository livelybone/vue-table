# @livelybone/vue-table
![gzip with dependencies: 5.7kb](https://img.shields.io/badge/gzip--with--dependencies-5.7kb-brightgreen.svg "gzip with dependencies: 5.7kb")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")
![mobile supported](https://img.shields.io/badge/mobile-supported-green.svg "mobile supported")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

A vue table component, support width change

## repository
https://github.com/livelybone/vue-table.git

## Demo
https://livelybone.github.io/vue/vue-table/

## Installation
```bash
npm i -S @livelybone/vue-table
```

## Register
```js
// import all
import * as VueTable from '@livelybone/vue-table';
const {TableBase,TableExtend} = VueTable

// Global register
Vue.component('VueTable', TableBase);
Vue.component('VueTable', TableExtend);

// Local register
new Vue({
  components:{TableBase,TableExtend}
})
```

Use in html, see what your can use in [CDN: unpkg](https://unpkg.com/@livelybone/vue-table/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/@livelybone/vue-table/lib/umd/<--module-->.js"></script>
```

## Example
See: [example](https://github.com/livelybone/vue-table/blob/master/examples/test.html)

## Slots
```js
const slotsName = [
  'th-0', 
  'th-1', 
  'th-2', 
  // ... 'th-{{thIndex}}'
  'td-0-0', 
  'td-0-1', 
  'td-0-2',     
  // ... 'td-{{trIndex}}-{{tdIndex}}'
]
```

## Props

### Common
| Name                      | Type                                      | DefaultValue                                  | Description  |
| ------------------------- | ----------------------------------------- | --------------------------------------------- | ------------ |
| `heads`                   | `Array`                                   | `[]`                                          | Array of `head` option, see `head` |
| `data`                    | `Array`                                   | `[]`                                          | Data list |
| `headTrStyle`             | `Object`                                  | none                                          |  |
| `trStyle`                 | `Object`                                  | none                                          |  |
| `evenTrStyle`             | `Object`                                  | none                                          |  |
| `noHead`                  | `Boolean`                                 | `false`                                       | Set to true to hide thead |

```js
/**
 * @key {String} name
 * @key {String} alias
 * @key {Number} width, init width of td, only works in TableExtend component
 * @key {Object} style, init style of th or td, width property do not works in TableExtend component
 * @key {Object} tdStyle, init style of td, width property do not works in TableExtend component, priority than `style`
 * @key {Function} formatter
 * @key {Function} headFormatter
 * */
const head = {
  name,
  alias,
  width,
  style,
  tdStyle,
  formatter,
  headFormatter,
}
```

### TableExtend
| Name                      | Type                                      | DefaultValue                                  | Description  |
| ------------------------- | ----------------------------------------- | --------------------------------------------- | ------------ |
| `scrollbarProps`          | `Object`                                  | `{isMobile: false, maxHeight: '1000vh'}`      | Props of module [@livelybone/vue-scrollbar-live](https://github.com/livelybone/vue-scrollbar-live) |

## Events
| Name              | EmittedData           | Description                                       |
| ----------------- | --------------------- | ------------------------------------------------- |
| `clickTh`         | `clickData`           |  |
| `clickTr`         | `clickData`           |  |
| `clickTd`         | `clickData`           |  |

```js
const clickData={
  ev: MouseEvent,
  th, // index,
  tr, // index,
  td, // index,
}
```

## style
For building style, you can use the css or scss file in lib directory.
```js
// scss
import 'node_modules/@livelybone/vue-table/lib/css/index.scss'

// css
import 'node_modules/@livelybone/vue-table/lib/css/index.css'
```
Or
```scss
// scss
@import 'node_modules/@livelybone/vue-table/lib/css/index.scss';

// css
@import 'node_modules/@livelybone/vue-table/lib/css/index.css';
```

Or, you can build your custom style by copying and editing `index.scss`

Especially, You can rewrite the style of TableExtend by `flex` layout
