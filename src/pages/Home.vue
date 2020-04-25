<template>
  <div>
    <!-- <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Canvas Txt
          </h1>
          <h2 class="subtitle">
            Render text on the HTML5 Canvas
          </h2>
        </div>
      </div>
    </section> -->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            Text on HTML5 Canvas
          </h1>
          <h2 class="subtitle">
            Render text onto canvases without breaking a sweat
          </h2>
        </div>
      </div>
    </section>

    <CanvasDemo></CanvasDemo>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container my-container">
          <h1 class="title">
            Install
          </h1>
          <h2 class="subtitle">
            Add <strong>canvas-txt</strong> to your awesome project 🔥
          </h2>
          <div class="install">
            <pre
              class="language-shell"
              v-highlight
            ><code>npm i canvas-txt --save</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body">
        <div class="container my-container">
          <h1 class="title">
            Usage
          </h1>
          <h2 class="subtitle">
            Using <strong>canvas-txt</strong> is pretty straight forward
          </h2>
          <div>
            <pre
              class="language-js"
              v-highlight
            ><code>import canvasTxt from 'canvas-txt'

var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

var txt = 'Lorem ipsum dolor sit amet'

canvasTxt.fontSize = 24

canvasTxt.drawText(ctx, txt, 100, 200, 200, 200)
</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body">
        <div class="container my-container">
          <h1 class="title">
            CDN
          </h1>
          <h2 class="subtitle">
            You can use <strong>canvas-txt</strong> directly from a
            <strong>CDN</strong>
          </h2>
          <div>
            <pre
              class="language-html"
              v-highlight
            ><code>&lt;script src="//unpkg.com/canvas-txt"&gt;&lt;/script&gt;</code></pre>
            <pre
              class="language-js"
              v-highlight
            ><code>var canvasTxt = window.canvasTxt.default
// ...remaining same as above</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body">
        <div class="container my-container">
          <div class="columns">
            <div class="column is-two-thirds">
              <h1 class="title">
                Documentation
              </h1>
              <h2 class="subtitle">
                Read the documetation at
                <a
                  href="https://github.com/geongeorge/canvas-txt"
                  target="_blank"
                  >Github</a
                >
              </h2>
              <!-- Place this tag where you want the button to render. -->
              <github-button
                href="https://github.com/geongeorge/canvas-txt"
                data-size="large"
                data-show-count="true"
                aria-label="Star geongeorge/canvas-txt on GitHub"
                >View on Github</github-button
              >
            </div>
            <div class="column">
              <img class="demo-img" src="@/assets/demo.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CanvasDemo from '../components/CanvasDemo'
import GithubButton from 'vue-github-button'
export default {
  components: {
    CanvasDemo,
    GithubButton
  }
}
</script>

<style>
.install {
  max-width: 450px;
  /* margin: 0 auto; */
}

pre {
  -webkit-overflow-scrolling: touch;
  background-color: transparent !important;
}
pre code {
  padding: 1em 2em !important;
  border-radius: 0.4em;
  font-size: 1.3em !important;
}
.demo-img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
}
</style>
