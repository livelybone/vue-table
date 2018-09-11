<template>
  <table class="vue-table table-base" v-if="valid">
    <thead class="thead" v-if="!noHead">
    <tr class="tr" :style="headTrStyle">
      <th class="th" v-for="(h, i) in heads" :key="i" :style="h.style"
          @click="$emit('clickTh', {ev:$event, th:i})">
        {{h.name}}
        <slot :name="'th-'+i"/>
        <span class="row-resize"></span>
      </th>
    </tr>
    </thead>
    <tbody class="tbody" v-if="data&&data.length>0" :style="{maxHeight: '30vh'}">
    <tr class="tr" v-for="(d, i) in data" :key="i"
        :style="Object.assign({},trStyle, i%2===1?evenTrStyle:{})"
        @click="$emit('clickTr', {ev: $event, tr:i})">
      <td class="td" v-for="(h, j) in heads" :key="j" :style="h.tdStyle||h.style"
          @click="$emit('clickTd', {ev:$event, tr:i, td:j})">
        <span v-if="h.alias" class="td-value"
              v-html="(h.formatter?h.formatter(d, h.alias):d[h.alias])||'—'"></span>
        <slot :name="'td-'+i+'-'+j"/>
      </td>
    </tr>
    </tbody>
  </table>
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
    evenTrStyle: Object,
    noHead: Boolean,
  },
  data() {
    return {}
  },
  computed: {
    valid() {
      let valid = true
      if (this.heads) {
        valid = this.heads instanceof Array
          && this.heads.every(head => head.alias || head.slot)
      }
      if (!valid) this.$emit('error', 'TableBase: prop heads is invalid')
      return valid
    },
  },
  methods: {},
}
</script>
