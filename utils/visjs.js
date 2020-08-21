import Vis from '@/plugins/vue-visjs'

const arrayDiff = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x))

const mountVisData = (vm, propName) => {
  let data = vm[propName]
  // If data is DataSet or DataView we return early without attaching our own events
  if (
    !(
      vm[propName] instanceof Vis.DataSet ||
      vm[propName] instanceof Vis.DataView
    )
  ) {
    data = new Vis.DataSet(vm[propName])
    // Rethrow all events
    data.on('*', (event, properties, senderId) =>
      vm.$emit(`${propName}-${event}`, { event, properties, senderId })
    )
    // We attach deep watcher on the prop to propagate changes in the DataSet
    const callback = (value) => {
      if (Array.isArray(value)) {
        const newIds = new Vis.DataSet(value).getIds()
        const diff = arrayDiff(vm.visData[propName].getIds(), newIds)
        vm.visData[propName].update(value)
        vm.visData[propName].remove(diff)
        vm.setWindow(vm.options.start, vm.options.end, { animation: false })
      }
    }

    vm.$watch(propName, callback, {
      deep: true,
    })
  }

  // Emitting DataSets back
  vm.$emit(`${propName}-mounted`, data)

  return data
}

const translateEvent = (event) => {
  return event.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

export { arrayDiff, mountVisData, translateEvent }
