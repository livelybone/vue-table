import Item from './Item.vue'
import { assign } from './utils'

export default {
  props: {
    heads: Array,
    widths: Array,
  },
  data() {
    return {
      contentWidths: [],
    }
  },
  methods: {
    contentChange(val, index) {
      this.$set(this.contentWidths, index, val)
      if (this.heads.every((h, i) => this.contentWidths[i] !== undefined)) {
        this.$emit('contentWidthChange', this.contentWidths)
      }
    },
    assign,
    cWidth(i) {
      const width = this.widths[i]
      if (!width) return 'auto'
      return (typeof width === 'number' ? `${width}px` : width)
    },
  },
  components: { Item },
}