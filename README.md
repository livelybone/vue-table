# @livelybone/vue-table
[![NPM Version](http://img.shields.io/npm/v/@livelybone/vue-table.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/vue-table)
[![Download Month](http://img.shields.io/npm/dm/@livelybone/vue-table.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/vue-table)
![gzip with dependencies: kb](https://img.shields.io/badge/gzip--with--dependencies-kb-brightgreen.svg "gzip with dependencies: kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

A vue table component, support width change

## repository
https://github.com/livelybone/vue-table.git

## Demo
https://github.com/livelybone/vue-table#readme

## Installation
```bash
npm i -S @livelybone/vue-table
```

## Global name
`VueSelect`

## Usage
```js
import VueSelect from '@livelybone/vue-table'
import '@livelybone/vue-table/lib/css/index.css';

// Global register
Vue.component('VueSelect', VueSelect)

// Local register
new Vue({
  components:{VueSelect}
})
```

when you want to set this module as external while you are developing another module, you should import it like this:
```js
import * as VueSelect  from '@livelybone/vue-table'

// then use it by need
```

Use in html, see what your can use in [CDN: unpkg](https://unpkg.com/@livelybone/vue-table/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/@livelybone/vue-table/lib/umd/<--module-->.js"></script>
```

## Props
| Name                      | Type                                      | DefaultValue                                  | Description  |
| ------------------------- | ----------------------------------------- | --------------------------------------------- | ------------ |
| `prop`                    | `type`                                    | none                                          | Description |


## Events
| Name              | EmittedData           | Description                                       |
| ----------------- | --------------------- | ------------------------------------------------- |
| `event`           | `type`                |  |

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
@import 'node_modules/@livelybone/vue-table/lib/css/index.scss'

// css
@import 'node_modules/@livelybone/vue-table/lib/css/index.css'
```

Or, you can build your custom style by copying and editing `index.scss`

## QA

1. Error `Error: spawn node-sass ENOENT`

> You may need install node-sass globally, `npm i -g node-sass`
