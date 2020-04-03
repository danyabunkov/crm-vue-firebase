export default {
  install(Vue, options) {
    Vue.prototype.$message = function(html) {
      M.toast({html, classes: 'rounded green'})
    }
    Vue.prototype.$error = function(html) {
      M.toast({html: `[Ошибка]: ${html}`, classes: 'red'})
    }
  }
}
