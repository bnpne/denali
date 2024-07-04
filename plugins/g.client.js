import * as THREE from 'three'

export default defineNuxtPlugin(app => {
  const _instance = ref(null)
  const _canvas = ref(null)

  const g = reactive({
    canvas: null,
    renderer: null,
    scene: null,
    camera: null,
  })

  const setup = ({canvas}) => {
    if (_instance.value) {
      console.warn('Canvas Already setup')
      return
    }

    _instance.value = _canvas
    _canvas.value = canvas

    init()
  }

  return {
    provide: {
      setup,
    },
  }
})
