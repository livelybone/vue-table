<template>
  <div class="row" ref="row" v-on="$listeners" :draggable="false">
    <item
      class="th"
      v-for="(h, i) in heads"
      :key="i"
      :style="assign(h.style, { width: cWidth(i) })"
      @click="$emit('clickTh', { ev: $event, th: i })"
      @contentWidthChange="contentChange($event, i)"
    >
      {{ h.headformatter ? h.headFormatter(h.title) : h.title }}
      <slot :name="'th-' + i" />
      <div
        class="column-resize"
        :draggable="false"
        @mousedown="down($event, i)"
        @click.stop=""
      ></div>
    </item>
  </div>
</template>

<script>
import RowMixin from './RowMixin'

export default {
  name: 'Row',
  mixins: [RowMixin],
  data() {
    return {
      start: null,
    }
  },
  methods: {
    down(ev, index) {
      this.start = { x: ev.pageX, index }
    },
    clear() {
      this.start = null
    },
    resize(ev) {
      if (this.start) {
        const value = ev.pageX - this.start.x
        this.$emit('widthChange', { value, index: this.start.index })
        this.start.x = ev.pageX
      }
    },
  },
  mounted() {
    window.addEventListener('mousemove', this.resize)
    window.addEventListener('mouseup', this.clear)
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.resize)
    window.removeEventListener('mouseup', this.clear)
  },
}
</script>
