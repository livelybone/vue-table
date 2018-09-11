<template>
  <div class="row" ref="row" v-on="$listeners" style="box-sizing: border-box;white-space: nowrap;">
    <item class="td" v-for="(h, i) in heads" :key="i"
          :style="assign(h.tdStyle||h.style,{width: cWidth(h.style,i)})"
          @click="$emit('clickTd', {ev:$event, td:i})"
          @textContentChange="contentChange($event, i)">
      <span class="td-value"
            v-html="(h.formatter?h.formatter(item, h.alias):item[h.alias])||'—'"></span>
      <slot :name="'td-'+i"/>
    </item>
  </div>
</template>

<script>
import RowMixin from './RowMixin'

export default {
  name: 'Row',
  mixins: [RowMixin],
  props: {
    item: Object,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
