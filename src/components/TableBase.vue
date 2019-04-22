<template>
  <table class="vue-table table-base">
    <thead class="thead" v-if="!noHead">
    <tr class="tr" :style="headTrStyle">
      <th
        class="th"
        v-for="(h, i) in heads"
        :key="i"
        :style="h.style"
        @click="$emit('clickTh', { ev: $event, th: i })"
      >
        {{ h.headformatter ? h.headFormatter(h.label) : h.label }}
        <slot :name="'th-'+i"/>
      </th>
    </tr>
    </thead>
    <tbody
      class="tbody"
      v-if="data && data.length > 0"
      :style="{ maxHeight: '30vh' }"
    >
    <tr class="tr"
        v-for="(d, i) in data"
        :key="i"
        :style="Object.assign({}, trStyle, i % 2 === 1 ? evenTrStyle : {})"
        @click="$emit('clickTr', { ev: $event, tr: i })"
    >
      <td
        class="td"
        v-for="(h, j) in heads"
        :key="j"
        :style="h.tdStyle || h.style"
        @click="$emit('clickTd', {ev:$event, tr:i, td:j})"
      >
        <div
          class="td-value"
          v-html="h.formatter ? h.formatter(d, h.name) : d[h.name]"
        ></div>
        <slot :name="'td-'+i+'-'+j"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableBase',
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
}
</script>
