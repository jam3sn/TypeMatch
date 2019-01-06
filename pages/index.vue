<template>
  <div
    v-if="getAllFonts.length > 0"
    class="flex min-h-screen">
    <style
      v-for="(block, key) in getBlocks"
      :key="key"
      v-html="fontCss(block)" />

    <aside-menu class="flex-no-shrink" />

    <main
      :style="`background-color: ${getBgColor};`"
      class="flex-grow min-h-screen p-8">
      <preview-block
        v-for="(block, key) in getBlocks"
        :key="key"
        :id="key"/>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Aside from '../components/Aside'
import PreviewBlock from '../components/PreviewBLock'

export default {
  components: {
    AsideMenu: Aside,
    PreviewBlock: PreviewBlock
  },

  computed: {
    ...mapGetters(['getBlocks', 'getAllFonts', 'getBgColor'])
  },

  created() {
    this.$store.dispatch('getFonts')
  },

  methods: {
    fontCss(block) {
      const font = this.$store.getters.getFont(block.family)
      const fontVarient = font.variants[block.variant]

      return `@font-face {
                font-family: "${font.family}";
                src: url(${font.files[fontVarient]}) format("truetype");
              }`
    }
  }
}
</script>
