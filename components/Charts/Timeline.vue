<template>
  <div class="chart-label-wrapper">
    <ChartYaxis :chart-label="chartLabel" @collapseChart="collapseChart" />
    <div id="vis-timeline" ref="visualization"></div>
  </div>
</template>

<script>
import Vis from '@/plugins/vue-visjs'
import ChartYaxis from '@/components/Charts/ChartYaxis.vue'
import { mountVisData, translateEvent } from '@/utils/visjs'

export default {
  components: {
    ChartYaxis,
  },
  props: {
    options: {
      type: Object,
    },
    events: {
      type: Array,
      default: () => [
        'click',
        'contextmenu',
        'currentTimeTick',
        'doubleClick',
        'drop',
        'mouseOver',
        'mouseDown',
        'mouseUp',
        'mouseMove',
        'groupDragged',
        'changed',
        'rangechange',
        'rangechanged',
        'select',
        'itemover',
        'itemout',
        'timechange',
        'timechanged',
      ],
    },
    chartLabel: {
      type: String,
      default: '',
    },
    groups: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      visData: {
        items: null,
        groups: null,
      },
    }
  },
  beforeDestroy() {
    this.timeline.destroy()
  },
  created() {
    // This should be a Vue data property, but Vue reactivity kinda bugs Vis.
    // See here for more: https://github.com/almende/vis/issues/2524
    this.timeline = null
  },
  mounted() {
    const container = this.$refs.visualization
    this.visData.items = mountVisData(this, 'items')
    if (this.groups && this.groups.length > 0) {
      this.visData.groups = mountVisData(this, 'groups')
      this.timeline = new Vis.Timeline(
        container,
        this.visData.items,
        this.visData.groups,
        this.options
      )
    } else {
      this.timeline = new Vis.Timeline(
        container,
        this.visData.items,
        this.options
      )
    }
    this.events.forEach((eventName) =>
      this.timeline.on(eventName, (props) =>
        this.$emit(translateEvent(eventName), props)
      )
    )
  },
  methods: {
    collapseChart() {
      this.$emit('collapseChart', true)
    },
    addCustomTime(time, id) {
      return this.timeline.addCustomTime(time, id)
    },
    destroy() {
      this.timeline.destroy()
    },
    fit() {
      this.timeline.fit()
    },
    focus(id, options) {
      this.timeline.focus(id, options)
    },
    getCurrentTime() {
      return this.timeline.getCurrentTime()
    },
    getCustomTime(id) {
      return this.timeline.getCustomTime(id)
    },
    getEventProperties(event) {
      return this.timeline.getEventProperties(event)
    },
    getItemRange() {
      return this.timeline.getItemRange()
    },
    getSelection() {
      return this.timeline.getSelection()
    },
    getVisibleItems() {
      return this.timeline.getVisibleItems()
    },
    getWindow() {
      return this.timeline.getWindow()
    },
    moveTo(time, options) {
      this.timeline.moveTo(time, options)
    },
    on(event, callback) {
      this.timeline.on(event, callback)
    },
    off(event, callback) {
      this.timeline.off(event, callback)
    },
    redraw() {
      this.timeline.redraw()
    },
    removeCustomTime(id) {
      this.timeline.removeCustomTime(id)
    },
    setCurrentTime(time) {
      this.timeline.setCurrentTime(time)
    },
    setCustomTime(time, id) {
      this.timeline.setCustomTime(time, id)
    },
    setCustomTimeTitle(title, id) {
      this.timeline.setCustomTimeTitle(title, id)
    },
    setData(object) {
      this.timeline.setData(object)
    },
    setGroups(groups) {
      this.timeline.setGroups(groups)
    },
    setItems(items) {
      this.timeline.setItems(items)
    },
    setOptions(options) {
      this.timeline.setOptions(options)
    },
    setSelection(ids, options) {
      this.timeline.setSelection(ids, options)
    },
    setWindow(start, end, options, callback) {
      this.timeline.setWindow(start, end, options, callback)
    },
    toggleRollingMode() {
      this.timeline.toggleRollingMode()
    },
    zoomIn(percentage, options, callback) {
      this.timeline.zoomIn(percentage, options, callback)
    },
    zoomOut(percentage, options, callback) {
      this.timeline.zoomOut(percentage, options, callback)
    },
  },
}
</script>

<style lang="scss">
.chart-label-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
#vis-timeline {
  // 36px padding to accomodate for chart padding
  padding-left: 43px;
  padding-right: 19px;
  display: flex;
  width: 100%;
  align-items: center;
}
.vis-timeline {
  margin-right: -1px;
  overflow: visible;
  border: 0;
  width: 100%;

  > .vis-panel.vis-bottom {
    display: none;
  }
}
.vis-center,
.vis-background {
  width: 100% !important;
  left: 0 !important;
}
.vis-background {
  pointer-events: none;
}
.vis-group {
  height: 22px;
  &:before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background: $blue;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  &:hover:before {
    opacity: 0.08;
  }
}

.vis-time-axis .vis-grid {
  background: rgb(245, 245, 245);
  border: 0 !important;
}
.vis-time-axis .vis-grid:nth-of-type(odd) {
  background: var(--foreground);
}
.vis-time-axis .vis-text {
  overflow: visible;
  color: var(--lightText);
  font-size: $fontSize;
  text-align: center;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
}
.vis-panel {
  &.vis-background {
    border: 1px solid var(--border);
  }
  &.vis-center {
    border: 0;
    top: 0 !important;
    .vis-content {
    }
  }
  &.vis-left {
    pointer-events: none;
    overflow: visible;
    width: 0;
    .vis-content {
      width: 500px;
    }
  }

  &.vis-bottom {
    background: var(--foreground);
    padding-top: 5px;
  }

  &.vis-right,
  &.vis-left,
  &.vis-bottom,
  &.vis-top {
    border: 0;
  }
}

.vis-custom-time {
  width: 1px;
  background-color: rgba(182, 182, 182, 1);
}

.vis-item.vis-range {
  &.purple {
    background-color: $purple;
  }
  &.blue {
    background-color: $blue;
  }
  &.red {
    background-color: $red;
  }
}

.vis-item.vis-dot {
  border-width: 5px;
  top: 4px !important;
  border-radius: 5px;
  &.green {
    border-color: $green;
  }
}
.vis-item.vis-range {
  height: 22px;
  height: 100%;
  border-radius: 0;
  border: 0;
}
.vis-labelset .vis-label {
  border: 0;
  height: 22px;
  .vis-inner {
    padding: 0;
    height: 22px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: $fontSize;
    color: var(--text);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.vis-labelset .vis-label .vis-panel .vis-shadow {
  display: none;
}
.vis-time-axis .vis-grid.vis-minor {
  border-color: var(--border);

  &:last-of-type {
    border-right: 1px solid var(--border);
  }
}
.vis-foreground .vis-group {
  border-bottom: 1px solid var(--border);
}
</style>
