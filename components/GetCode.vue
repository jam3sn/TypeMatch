<template>
  <div class="mb-8">
    <h3 class="mb-4">HTML Import</h3>

    <div class="relative">
      <code class="bg-grey-lighter border border-grey-light block text-black text-sm rounded mb-8 pl-4 pr-12 py-3 w-full">
        {{ htmlCode }}
      </code>

      <button
        v-clipboard="htmlCode"
        class="copy-button"
        @click="htmlCopied = true">{{ htmlCopied ? 'Copied!' : 'Copy' }}</button>
    </div>

    <h3 class="mb-4">CSS Import</h3>

    <div class="relative">
      <code class="bg-grey-lighter border border-grey-light block text-black text-sm rounded pl-4 pr-12 py-3 w-full">
        {{ cssCode }}
      </code>

      <button
        v-clipboard="cssCode"
        class="copy-button"
        @click="cssCopied = true">{{ cssCopied ? 'Copied!' : 'Copy' }}</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      cssCopied: false,
      htmlCopied: false,
      weights: {
        100: 100,
        '100italic': '100i',
        200: 200,
        '200italic': '200i',
        300: 300,
        '300italic': '300i',
        light: 300,
        400: 400,
        '400italic': '400i',
        regular: 400,
        500: 500,
        '500italic': '500i',
        600: 600,
        '600italic': '600i',
        'semi-bold': 600,
        700: 700,
        '700italic': '700i',
        bold: 700,
        800: 800,
        '800italic': '800i',
        'extra-bold': 800,
        900: 900,
        '900italic': '900i'
      }
    }
  },

  computed: {
    ...mapGetters(['getBlocks', 'getFont']),

    cssCode() {
      return `@import url('https://fonts.googleapis.com/css?family=${this.fontUrl()}');`
    },

    htmlCode() {
      return `<link href="https://fonts.googleapis.com/css?family=${this.fontUrl()}" rel="stylesheet">`
    }
  },

  watch: {
    cssCopied() {
      setTimeout(() => {
        this.cssCopied = false
      }, 3000)
    }
  },

  methods: {
    fontUrl() {
      const blocks = this.getBlocks
      let fonts = []
      let fontString = ''

      // Get font families and variants
      blocks.forEach(block => {
        let { family, variants } = this.getFont(block.family)
        console.log('block', block)
        console.log('variant', variants)

        // Create the family
        if (fonts.findIndex(obj => obj.family === family) < 0) {
          fonts.push({ family, variants: [] })
        }

        // Add a variant to the family
        const fontId = fonts.findIndex(obj => obj.family === family)

        if (
          fontId >= 0 &&
          !fonts[fontId].variants.includes(
            this.weights[variants[block.variant]]
          )
        ) {
          console.log('ADD')
          fonts[fontId].variants.push(this.weights[variants[block.variant]])
        }
      })

      // Loop font families and variants, building a url string: Open+Sans:300,400|ABeeZee:300
      fonts.forEach(font => {
        console.log(font)
        // Family name, spaces replaced with +
        fontString += `${font.family.replace(' ', '+')}`

        // Add variants
        if (font.variants.length > 0) {
          fontString += ':'

          font.variants.forEach(variant => (fontString += `${variant},`))

          fontString = fontString.slice(0, -1)
        }

        fontString += '|'
      })

      return fontString.slice(0, -1)
    }
  }
}
</script>
