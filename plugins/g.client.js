import R from '~/R'

export default defineNuxtPlugin(app => {
  const _canvas = ref(null)
  const RInstance = ref(null)

  const setup = canvas => {
    _canvas.value = canvas

    if (_canvas.value) {
      RInstance.value = new R(_canvas.value)
    }
  }

  return {
    provide: {
      setup,
    },
  }
})
