<template>
  <div class="row"
       ref="row"
       v-on="$listeners">
    <item class="td"
          v-for="(h, i) in heads"
          :key="i"
          :style="assign(h.tdStyle||h.style,{width: cWidth(i)})"
          @click="$emit('clickTd', {ev:$event, td:i})"
          @contentWidthChange="contentChange($event, i)">
      <div class="td-value"
           v-html="(h.formatter?h.formatter(item, h.alias):item[h.alias])"></div>
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
