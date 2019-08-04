# @livelybone/vue-table
[![NPM Version](http://img.shields.io/npm/v/@livelybone/vue-table.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/vue-table)
[![Download Month](http://img.shields.io/npm/dm/@livelybone/vue-table.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/vue-table)
![gzip with dependencies: 5.4kb](https://img.shields.io/badge/gzip--with--dependencies-5.4kb-brightgreen.svg "gzip with dependencies: 5.4kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

A vue table component, support width change.

Prop `heads` has changed since 2.0.0. Install v1.8.0 if you want use the old config of `heads` 

## repository
https://github.com/livelybone/vue-table.git

## Demo
https://livelybone.github.io/vue/vue-table/

## Run Example
Your can see the usage by run the example of the module, here is the step:

1. Clone the library `git clone https://github.com/livelybone/vue-table.git`
2. Go to the directory `cd vue-table`
3. Install npm dependencies `npm i`(use taobao registry: `npm i --registry=http://registry.npm.taobao.org`)
4. Open service `npm run dev`
5. See the example(usually is `http://127.0.0.1/examples/test.html`) in your browser

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

## QA

1. Error `Error: spawn node-sass ENOENT`

> You may need install node-sass globally, `npm i -g node-sass`
