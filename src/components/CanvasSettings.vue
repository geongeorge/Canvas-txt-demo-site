<template>
  <section>
    <section>
      <b-field label="Text">
        <b-input
          rows="1"
          maxlength="500"
          type="textarea"
          v-model="text"
        ></b-input>
      </b-field>
    </section>
    <section class="slider-fields">
      <div class="columns" style="margin-top: 0;">
        <b-field label="Position X" class="column">
          <b-slider size="is-small" v-model="pos.x" :min="min" :max="max">
          </b-slider>
        </b-field>
        <b-field label="Position Y" class="column">
          <b-slider size="is-small" v-model="pos.y" :min="min" :max="max">
          </b-slider>
        </b-field>
      </div>
      <section class="columns">
        <b-field label="Width" class="column">
          <b-slider
            size="is-small"
            type="is-warning"
            v-model="size.w"
            :min="50"
            :max="max"
          >
          </b-slider>
        </b-field>
        <b-field label="Height" class="column">
          <b-slider
            size="is-small"
            type="is-warning"
            v-model="size.h"
            :min="min"
            :max="max"
          >
          </b-slider>
        </b-field>
      </section>
      <section class="columns">
        <b-field label="Font Size" class="column">
          <b-slider
            size="is-small"
            type="is-success"
            v-model="font.size"
            :min="0"
            :max="100"
          >
          </b-slider>
        </b-field>
        <b-field label="Line Height" class="column">
          <b-slider
            size="is-small"
            type="is-info"
            v-model="font.lineHeight"
            :min="0"
            :max="200"
          >
          </b-slider>
        </b-field>
      </section>
      <section class="columns">
        <b-field label="Horizontal Align" class="column">
          <b-select v-model="align">
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </b-select>
        </b-field>
        <b-field label="Vertical Align" class="column">
          <b-select v-model="vAlign">
            <option value="top">Top</option>
            <option value="middle">Middle</option>
            <option value="bottom">Bottom</option>
          </b-select>
        </b-field>
      </section>
      <section class="columns">
        <div class="field column">
          <b-switch class="pt-3 mt-3" v-model="justify">Justify</b-switch>
        </div>
        <div class="field column">
          <b-switch class="pt-3 mt-3" v-model="debug">Debug</b-switch>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
let timeout = null
let maxTimeout = 10

export default {
  data() {
    return {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      pos: { x: 200, y: 200 },
      size: { w: 400, h: 220 },
      font: {
        size: 38,
        lineHeight: null
      },
      debug: false,
      align: 'center',
      vAlign: 'middle',
      justify: false,
      min: 0,
      max: 800
    }
  },
  methods: {
    logg(e) {
      console.log(e)
    }
  },
  watch: {
    $data: {
      handler: function(val) {
        // debounce
        if (timeout) return

        timeout = setTimeout(() => {
          this.$emit('settingsChange', val)
          timeout = null
        }, maxTimeout)
      },
      deep: true
    }
  }
}
</script>

<style>
.slider-fields .field {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
