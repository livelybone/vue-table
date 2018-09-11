import Item from './Item.vue'
import { assign } from './utils'

export default {
  props: {
    heads: Array,
    widths: Array,
  },
  data() {
    return {
      textContents: [],
    }
  },
  methods: {
    contentChange(val, index) {
      this.$set(this.textContents, index, val)
      if (this.heads.every((h, i) => this.textContents[i] !== undefined)) {
        this.$emit('textContentChange', this.textContents)
      }
    },
    assign,
    cWidth(style = {}, i) {
      return (typeof this.widths[i] === 'number' ? `${this.widths[i]}px` : this.widths[i]) || style.width
    },
  },
  components: { Item },
}