<template>
  <div class="border-r h-screen max-w-xs relative w-full">
    <header class="border-b p-4 text-center">
      <h1 class="text-3xl">Type<span class="font-light">Match</span></h1>
    </header>

    <section
      style="top: 66px; bottom: 77px;"
      class="absolute overflow-y-scroll pin">
      <div class="border-t flex flex-wrap items-center p-8">
        <div class="pr-3 w-1/2">
          <label for="bg-color">Background Color</label>
        </div>

        <div class="pl-3 w-1/2">
          <input
            id="bg-color"
            v-model="bgColor"
            type="text"
            class="bg-grey-light border border-grey-light rounded text-black p-1 w-full focus:border-green focus:outline-none">
        </div>
      </div>

      <aside-text-block
        v-for="(block, key) in getBlocks"
        :key="key"
        :id="key" />

      <div class="border-t p-8">
        <button
          class="bg-grey-light border border-grey-light block text-black font-bold rounded px-4 py-3 w-full focus:outline-none focus:border-green hover:bg-grey hover:border-grey"
          @click="$store.commit('addNewBlock')">Add Text Block</button>
      </div>
    </section>

    <section class="absolute border-t flex px-8 py-4 pin-b pin-x">
      <button
        class="bg-grey-light border border-grey-light block text-black font-bold rounded px-4 py-3 w-full focus:outline-none focus:border-green hover:bg-grey hover:border-grey"
        @click="modal = true">Get Code</button>
    </section>

    <modal
      v-if="modal"
      @close="modal = false">
      <h2 slot="title">Get code</h2>

      <get-code slot="body" />

      <button
        slot="footer"
        class="bg-grey-light border border-grey-light block text-black font-bold rounded px-4 py-3 w-full focus:outline-none focus:border-green hover:bg-grey hover:border-grey"
        @click="modal = false" >Close</button>
    </modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AsideTextBlock from './AsideTextBlock'
import GetCode from './GetCode'
import Modal from './Modal'

export default {
  components: {
    AsideTextBlock,
    GetCode,
    Modal
  },

  data() {
    return {
      modal: false
    }
  },

  computed: {
    ...mapGetters(['getBlocks']),

    bgColor: {
      get: function() {
        return this.$store.getters.getBgColor
      },
      set: function(value) {
        this.$store.commit('updateBgColor', value)
      }
    }
  }
}
</script>
