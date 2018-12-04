<template>
  <div v-on="$listeners" ref="item">
    <slot/>
  </div>
</template>

<script>
import { getSlotText } from './utils'

export default {
  name: 'Item',
  props: {
    log: Boolean,
  },
  mounted() {
    this.textChange(getSlotText(this.$slots.default))
  },
  updated() {
    this.textChange(getSlotText(this.$slots.default))
  },
  data() {
    return {
      oldText: '',
    }
  },
  methods: {
    textChange(text) {
      if (text !== this.oldText) {
        this.oldText = text
        this.$emit('textContentChange', { text, width: this.$refs.item.offsetWidth })
      }
    },
  },
}
</script>
