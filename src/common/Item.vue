<template>
  <div v-on="$listeners" ref="item">
    <slot />
  </div>
</template>

<script>
import * as ScrollGet from '@livelybone/scroll-get'

const { getRect } = ScrollGet

export default {
  name: 'Item',
  mounted() {
    this.widthChange(getRect(this.$refs.item))
  },
  updated() {
    this.widthChange(getRect(this.$refs.item))
  },
  data() {
    return {
      oldWidth: -1,
    }
  },
  methods: {
    widthChange({ width }) {
      if (width !== this.oldWidth) {
        this.oldWidth = width
        this.$emit('contentWidthChange', width)
      }
    },
  },
}
</script>
