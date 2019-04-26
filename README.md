# @livelybone/vue-table
![gzip with dependencies: 5.4kb](https://img.shields.io/badge/gzip--with--dependencies-5.4kb-brightgreen.svg "gzip with dependencies: 5.4kb")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")
![mobile supported](https://img.shields.io/badge/mobile-supported-green.svg "mobile supported")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

A vue table component, support width change.

Prop `heads` has changed since 2.0.0. Install v1.8.0 if you want use the old config of `heads` 

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

> th slot, slotName: `th-{{headKey}}`

> td slot, slotName: `td-{{dataKey}}-{{headKey}}`

// The source code just like：
```vue
<template>
  <table>
    <tr>
      <th v-for="(h, headKey) in heads">
        ...
        <slot :name="'th-' + headKey"></slot>
      </th>
    </tr>
    <tr v-for="(d, dataKey) in data">
      <td v-for="(h, headKey) in heads">
        ...
        <slot :name="'th-' + dataKey + '-' +headKey"></slot>
      </td>  
    </tr>
  </table>
</template>
```

## Props

### Common
| Name                      | Type                                      | DefaultValue                                  | Description  |
| ------------------------- | ----------------------------------------- | --------------------------------------------- | ------------ |
| `heads`                   | `[Array, Object]`                         | `[]`                                          | List of `head`, see `head` |
| `data`                    | `[Array, Object]`                         | `[]`                                          | List of data |
| `headTrStyle`             | `Object`                                  | none                                          |  |
| `trStyle`                 | `Object`                                  | none                                          |  |
| `evenTrStyle`             | `Object`                                  | none                                          |  |
| `noHead`                  | `Boolean`                                 | `false`                                       | Set to true to hide thead |

```js
/**
 * @key { String } title
 * @key { String } key
 * @key { Number } width, init width of td, only works in TableExtend component
 * @key { Object } style, init style of th or td, width property do not works in TableExtend component
 * @key { Object } tdStyle, init style of td, width property do not works in TableExtend component, priority than `style`
 * @key { Function } formatter
 * @key { Function } headFormatter
 * */
const head = {
  title,
  key,
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
