<template>
  <div class="row" ref="row" v-on="$listeners" style="box-sizing: border-box;white-space: nowrap;"
       :draggable="false">
    <item class="th" v-for="(h, i) in heads" :key="i"
          :style="assign(h.style,{width: cWidth(h.style,i)})"
          @click="$emit('clickTh', {ev:$event, th:i})"
          @textContentChange="contentChange($event, i)">
      {{h.name}}
      <slot :name="'th-'+i"/>
      <span class="column-resize" :draggable="false" @mousedown="down($event, i)"></span>
    </item>
  </div>
</template>

<script>
import RowMixin from './RowMixin'

export default {
  name: 'Row',
  mixins: [RowMixin],
  mounted() {
    window.addEventListener('mousemove', this.resize)
    window.addEventListener('mouseup', this.clear)
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.resize)
    window.removeEventListener('mouseup', this.clear)
  },
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
}
</script>
