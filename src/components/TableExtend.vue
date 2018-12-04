<template>
  <div class="vue-table table-extend" ref="table"
       :style="{width:tableChangedWidth?tableChangedWidth+'px':''}">
    <div class="thead" v-if="!noHead">
      <th-row class="tr" :style="headTrStyle" :widths="widths" :heads="heads"
              @clickTh="$emit('clickTh', $event)" @widthChange="widthChange"
              @textContentChange="textChange($event, 0)">
        <slot v-for="(h,i) in heads" :name="'th-'+i" :slot="'th-'+i"/>
      </th-row>
    </div>
    <vue-scrollbar class="tbody" v-if="data&&data.length>0" :isMobile="scrollbarProps.isMobile"
                   :maxHeight="scrollbarProps.maxHeight||'1000vh'">
      <td-row class="tr" v-for="(d, i) in data" :key="i"
              :heads="heads" :item="d" :widths="widths"
              :style="assign(trStyle, i%2===1?evenTrStyle:{})"
              @click="$emit('clickTr', {ev:$event, tr:i})"
              @clickTd="$emit('clickTd', assign($event, {tr:i}))"
              @textContentChange="textChange($event, i+1)">
        <slot v-for="(h,j) in heads" :name="'td-'+i+'-'+j" :slot="'td-'+j"/>
      </td-row>
    </vue-scrollbar>
  </div>
</template>

<script>
import VueScrollbar from 'vue-scrollbar-live'
import TdRow from '../common/TdRow.vue'
import ThRow from '../common/ThRow.vue'
import { assign } from '../common/utils'

export default {
  name: 'TableBase',
  components: { VueScrollbar, TdRow, ThRow },
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
    scrollbarProps: {
      default() {
        return {}
      },
      type: Object,
    },
  },
  data() {
    return {
      tableSize: {},
      textContents: [],
      tableChangedWidth: 0,
      fixedWidth: [],
    }
  },
  computed: {
    widths() {
      if (this.textContentsInvalid()) return []
      const { clientWidth } = this.tableSize
      const maxTexts = this.heads.map((head, i) => (this.textContents[i] instanceof Array
        ? Math.max(...this.textContents.map(c => c[i].text.length), 4) : 4))
      const total = maxTexts.reduce((pre, len, i) => (this.fixedWidth[i] ? pre : pre + len), 0)

      const availableWidth = clientWidth - this.fixedWidth.reduce((pre, width) => pre + width, 0)
      return maxTexts.map((len, i) => this.fixedWidth[i] || len / total * availableWidth)
    },
  },
  watch: {
    textContents() {
      if (!this.textContentsInvalid()) {
        this.fixedWidth = this.heads.map((h, i) => {
          const hWidth = parseInt((h.style && h.style.width) || (h.tdStyle && h.tdStyle.width), 10)
          return hWidth || this.fixedWidth[i]
            ? this.fixedWidth[i] || this.textContents[0][i].width : 0
        })
      }
    },
  },
  methods: {
    textContentsInvalid() {
      return this.textContents.length <= 0
        && [1, this.data].some((d, i) => !this.textContents[i + 1])
    },
    sizeChange() {
      const { clientHeight = 0, clientWidth = 0 } = this.$refs.table || {}
      this.$set(this.tableSize, 'clientHeight', clientHeight)
      this.$set(this.tableSize, 'clientWidth', clientWidth)
    },
    assign,
    textChange(val, index) {
      this.$set(this.textContents, index, val)
    },
    widthChange({ value, index }) {
      const val = this.widths[index] + value
      if (val > 60) {
        this.$set(this.fixedWidth, index, val)
        this.tableSize.clientWidth = this.tableSize.clientWidth + value
        this.tableChangedWidth = this.tableSize.clientWidth
      }
    },
  },
  mounted() {
    this.sizeChange()
    window.addEventListener('resize', this.sizeChange)
  },
  updated() {
    this.sizeChange()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.sizeChange)
  },
}
</script>
