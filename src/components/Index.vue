<template>
  <div class="vue-table">
    <table class="table-base" v-if="valid">
      <thead v-if="!noHead">
      <tr :style="headTrStyle">
        <th v-for="(h, i) in heads" :key="i" :style="h.style">
          {{h.name}}
          <slot :name="'th'+i"/>
        </th>
      </tr>
      </thead>
      <tbody v-if="!searching&&data&&data.length>0">
      <tr v-for="(d, i) in data" :key="i" :style="Object.assign({},trStyle, i%2===1?evenTrStyle:{})"
          @click="$emit('clickTr', i)">
        <td v-for="(h, j) in heads" :key="j" :style="h.tdStyle||h.style">
          <span v-html="(h.formatter?h.formatter(d, h.alias):d[h.alias])||'—'"></span>
          <slot :name="'td'+i"/>
        </td>
      </tr>
      </tbody>
    </table>
    <slot v-if="data&&data.length>0" name="no-result"/>
    <slot v-if="searching" name="searching"/>
  </div>
</template>

<script>
export default {
  name: 'TableBase',
  beforeMount() {
  },
  props: {
    heads: {
      default() {
        return []
      },
      type: Array,
    },
    data: {
      default() {
        return []
      },
      type: Array,
    },
    headTrStyle: Object,
    trStyle: Object,
    noHead: Boolean,
    evenTrStyle: Object,
    searching: Boolean,
  },
  data() {
    return {}
  },
  computed: {
    valid() {
      let valid = true
      if (this.heads) {
        valid = this.heads instanceof Array
          && this.heads.every(head => (head.name && head.alias) || (head.slot))
      }
      if (!valid) this.$emit('error', 'TableBase: prop heads is invalid')
      return valid
    },
  },
  methods: {},
}
</script>
