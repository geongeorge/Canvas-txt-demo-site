<template>
  <div class="container mb-25">
    <section class="section columns">
      <div class="column">
        <canvas id="canvas" height="720" width="800"></canvas>
      </div>
      <div class="column">
        <CanvasSettings @settingsChange="settingsChange"></CanvasSettings>
      </div>
    </section>
  </div>
</template>

<script>
import CanvasSettings from './CanvasSettings'
import canvasTxt from 'canvas-txt'

let ctx, c
const sampleTxt = 'Lorem ipsum dolor, sit'

export default {
  components: {
    CanvasSettings
  },
  data() {
    return {}
  },
  methods: {
    initCanvas() {
      c = document.getElementById('canvas')
      ctx = c.getContext('2d')
    },
    renderCanvas(settings = {}) {
      if (!ctx) return //empty context object

      ctx.clearRect(0, 0, c.width, c.height)

      const text = settings.text ? settings.text : sampleTxt

      const x =
        settings.pos && settings.pos.x !== undefined ? settings.pos.x : 100
      const y =
        settings.pos && settings.pos.y !== undefined ? settings.pos.y : 200

      if (settings.size.w <= 50) settings.size.w = 50

      const width =
        settings.size && settings.size.w !== undefined ? settings.size.w : 200
      const height =
        settings.size && settings.size.h !== undefined ? settings.size.h : 200

      const debug = settings.debug ? settings.debug : false

      const justify = settings.justify ? settings.justify : false

      const fontSize =
        settings.font && settings.font.size ? settings.font.size : 24

      const lineHeight =
        settings.font && settings.font.lineHeight
          ? settings.font.lineHeight
          : null

      const align = settings.align ? settings.align : 'center'

      const vAlign = settings.vAlign ? settings.vAlign : 'middle'

      canvasTxt.fontSize = fontSize
      canvasTxt.lineHeight = lineHeight

      canvasTxt.align = align
      canvasTxt.vAlign = vAlign

      canvasTxt.debug = debug

      canvasTxt.justify = justify

      canvasTxt.drawText(ctx, text, x, y, width, height)
    },
    settingsChange(e) {
      this.renderCanvas(e)
    }
  },
  mounted() {
    this.initCanvas()
    this.renderCanvas()
  }
}
</script>

<style>
#canvas {
  border: solid 1px #eee;
  background: white;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
  transition: all 200ms ease-in-out;
}

#canvas:hover {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.35);
}
</style>
