export { default as EventBus } from '../../components/EventBus.js'
export { default as Chart } from '../../components/Charts/Chart.vue'
export { default as ChartLegend } from '../../components/Charts/ChartLegend.vue'
export { default as ChartPercentAxis } from '../../components/Charts/ChartPercentAxis.vue'
export { default as ChartXaxis } from '../../components/Charts/ChartXaxis.vue'
export { default as ChartYaxis } from '../../components/Charts/ChartYaxis.vue'
export { default as Timeline } from '../../components/Charts/Timeline.vue'

export const LazyEventBus = import('../../components/EventBus.js' /* webpackChunkName: "components/EventBus" */).then(c => c.default || c)
export const LazyChart = import('../../components/Charts/Chart.vue' /* webpackChunkName: "components/Charts/Chart" */).then(c => c.default || c)
export const LazyChartLegend = import('../../components/Charts/ChartLegend.vue' /* webpackChunkName: "components/Charts/ChartLegend" */).then(c => c.default || c)
export const LazyChartPercentAxis = import('../../components/Charts/ChartPercentAxis.vue' /* webpackChunkName: "components/Charts/ChartPercentAxis" */).then(c => c.default || c)
export const LazyChartXaxis = import('../../components/Charts/ChartXaxis.vue' /* webpackChunkName: "components/Charts/ChartXaxis" */).then(c => c.default || c)
export const LazyChartYaxis = import('../../components/Charts/ChartYaxis.vue' /* webpackChunkName: "components/Charts/ChartYaxis" */).then(c => c.default || c)
export const LazyTimeline = import('../../components/Charts/Timeline.vue' /* webpackChunkName: "components/Charts/Timeline" */).then(c => c.default || c)
