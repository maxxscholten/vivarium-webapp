<template>
  <section class="container chart-legend">
    <span
      v-for="(item, index) in legendList"
      :key="index"
      class="legend-item"
      :class="{ [itemClass(index, item)]: true, hidden: isHidden(item) }"
      @click="toggleSeriesClick(item)"
    >
      <span v-if="!item.isKpm"
        ><i class="legend-icon" :style="{ backgroundColor: item.color }"></i>
        {{ item.navName }}</span
      >

      <el-popover
        v-if="item.isKpm"
        :popper-class="item.name"
        placement="bottom"
        width="350"
        trigger="hover"
        :title="item.navName"
        :content="item.description"
      >
        <template slot="reference">
          <span v-if="item.name === 'ecm'"
            ><zap-icon width="14" class="kpm-icon"></zap-icon>
            {{ item.name }}</span
          >
          <span v-else-if="item.name === 'eom'"
            ><server-icon width="14" class="kpm-icon"></server-icon>
            {{ item.name }}</span
          >
          <span v-else-if="item.name === 'epm'"
            ><users-icon width="14" class="kpm-icon"></users-icon>
            {{ item.name }}</span
          >
          <span v-else-if="item.name === 'oim'"
            ><truck-icon width="14" class="kpm-icon"></truck-icon>
            {{ item.name }}</span
          >
          <span v-else-if="item.name === 'ram'"
            ><shield-icon width="14" class="kpm-icon"></shield-icon>
            {{ item.name }}</span
          >
          <span v-else-if="item.name === 'sum'"
            ><globe-icon width="14" class="kpm-icon"></globe-icon>
            {{ item.name }}</span
          >
        </template>
      </el-popover>
    </span>
  </section>
</template>

<script>
import colors from '@/utils/colors.json'
import { EventBus } from '@/components/EventBus.js'
import {
  TruckIcon,
  ServerIcon,
  ZapIcon,
  UsersIcon,
  ShieldIcon,
  GlobeIcon,
} from 'vue-feather-icons'

export default {
  components: {
    TruckIcon,
    ServerIcon,
    ZapIcon,
    UsersIcon,
    ShieldIcon,
    GlobeIcon,
  },
  props: {
    chartId: {
      type: String,
    },
    series: {
      type: Array,
      default: [],
    },
    toggleSeries: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  data() {
    return {
      hiddenItems: [],
    }
  },
  computed: {
    localDataList() {
      const dataSeries = JSON.parse(JSON.stringify(this.series))
      return dataSeries.map((series, seriesIndex) => {
        series.color = colors[seriesIndex]
        return series
      })
    },
    legendList() {
      return this.localDataList.map((series, i) => {
        let isKpm = false
        let navName = series.navName
        const name = series.name
        let description = ''
        if (
          name === 'ecm' ||
          name === 'eom' ||
          name === 'epm' ||
          name === 'oim' ||
          name === 'ram' ||
          name === 'sum'
        ) {
          isKpm = true
        }

        if (name === 'ecm') {
          navName = 'Energy Conservation Measures'
          description =
            'Cost of issues that represents energy cost and consumption.'
        }
        if (name === 'eom') {
          navName = 'Equipment Optimization Measures'
          description = 'Cost of issues that represents equipment life cycle'
        }
        if (name === 'epm') {
          navName = 'Employee Performance Measures'
          description =
            'Cost of issues associated with constructive and creative environment.'
        }
        if (name === 'oim') {
          navName = 'Operation Improvement Measures'
          description =
            'Cost of issues that represents equipment performance supporting core business functions.'
        }
        if (name === 'ram') {
          navName = 'Risk Avoidance Measures'
          description =
            'Cost of issues corresponding to severity of building or equipment failure.'
        }
        if (name === 'sum') {
          navName = 'Space Utilization Measures'
          description =
            'Cost of issues related to spaces and areas being populated.'
        }

        return {
          index: i,
          color: series.color,
          isKpm,
          navName,
          description,
          name,
        }
      })
    },
  },
  created() {},
  mounted() {},
  methods: {
    itemClass(i, item) {
      let className = item.name
      if (item.isKpm) {
        className += ' kpm-label'
      }
      return className
    },
    toggleSeriesClick(item) {
      if (this.toggleSeries) {
        if (this.hiddenItems.includes(item.index)) {
          this.hiddenItems = this.hiddenItems.filter((hiddenItem) => {
            return hiddenItem !== item.index
          })
        } else {
          this.hiddenItems.push(item.index)
        }
        console.log('toggle', { name: item.name, chartId: this.chartId })
        EventBus.$emit('toggleSeries', {
          name: item.name,
          chartId: this.chartId,
        })
      }
    },
    isHidden(item) {
      return this.hiddenItems.includes(item.index)
    },
  },
}
</script>

<style scoped lang="scss">
.chart-legend {
  padding: 10px 20px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 70px;

  .legend-item {
    position: relative;
    top: 0;
    font-size: $fontSize;
    line-height: 1;
    margin-bottom: 5px;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 15px;

    &.hidden {
      opacity: 0.5;
    }

    span {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
  .card & {
    background: none;
  }
}
</style>
