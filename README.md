# @livelybone/vue-table
![gzip with dependencies: kb](https://img.shields.io/badge/gzip--with--dependencies-kb-brightgreen.svg "gzip with dependencies: kb")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

A vue table component, support width change

## repository
https://github.com/livelybone/vue-table.git

## Demo
https://github.com/livelybone/vue-table#readme

## Installation
```bash
npm i -S @livelybone/vue-table
```

## Register
```js
// import all
import ModuleName from '@livelybone/vue-table';

// Global register
Vue.component('VueTable', ModuleName);

// Local register
new Vue({
  components:{ModuleName}
})
```

Use in html, see what your can use in [CDN: unpkg](https://unpkg.com/@livelybone/vue-table/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/@livelybone/vue-table/lib/umd/<--module-->.js"></script>
```

## Props

### Common
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
@import 'node_modules/@livelybone/vue-table/lib/css/index.scss';

// css
@import 'node_modules/@livelybone/vue-table/lib/css/index.css';
```

Or, you can build your custom style by copying and editing `index.scss`
