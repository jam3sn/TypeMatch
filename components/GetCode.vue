<template>
  <div class="mb-8">
    <h3 class="mb-4">HTML Import</h3>
    <code class="bg-grey-lighter border border-grey-light block text-black text-sm rounded mb-8 px-4 py-3 w-full">
      {{ htmlCode }}
    </code>

    <h3 class="mb-4">CSS Import</h3>
    <code class="bg-grey-lighter border border-grey-light block text-black text-sm rounded px-4 py-3 w-full">
      {{ cssCode }}
    </code>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      weights: {
        light: 300,
        regular: 400,
        'semi-bold': 600,
        bold: 700,
        'extra-bold': 800
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

  methods: {
    fontUrl() {
      const blocks = this.getBlocks
      let fonts = []
      let fontString = ''

      // Get font families and variants
      blocks.forEach(block => {
        let { family, variants } = this.getFont(block.family)

        // Create the family
        if (!fonts.hasOwnProperty(family)) fonts[family] = []

        // Add a vaiant to the family
        if (!fonts[family].includes(variants[block.variant]))
          fonts[family].push(this.weights[variants[block.variant]])
      })

      // Loop font families and variants, building a url string: Open+Sans:300,400|ABeeZee:300
      fonts.forEach((variants, family) => {
        console.log('fonts')
        // Family name, spaces replaced with +
        fontString += `${family.replace(' ', '+')}`

        // Add variants
        if (variants.length > 0) {
          fontString += ':'

          variants.forEach(variant => {
            fontString += `${variant},`
          })

          fontString = fontString.slice(0, -1)
        }

        fontString += '|'
      })

      return fontString.slice(0, -1)
    }
  }
}
</script>
