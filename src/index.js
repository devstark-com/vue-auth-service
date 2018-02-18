import service from './service'

// // Install plugin
// export function install (Vue, options) {
//   service
// }

// Expose
export {
  service
}
/* -- Plugin definition & Auto-install -- */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install (Vue, options) {
    const serviceInstance = service(Vue, options)
    Vue.$auth = Vue.prototype.$auth = serviceInstance
    if (options.autoBoot) serviceInstance.boot()
    return serviceInstance
  }
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
