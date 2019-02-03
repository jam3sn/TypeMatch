<template>
  <div class="border-r h-screen max-w-xs relative w-full">
    <header class="border-b p-4 text-center">
      <h1 class="text-3xl">TypeMatch</h1>
    </header>

    <section
      style="top: 67px; bottom: 77px; padding-bottom: 42px;"
      class="absolute overflow-y-scroll pin">
      <div class="flex flex-wrap items-center p-8">
        <div class="pr-3 w-1/2">
          <label for="bg-color">Background Color</label>
        </div>

        <div class="pl-3 w-1/2">
          <input
            id="bg-color"
            v-model="bgColor"
            type="text">
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

    <div
      style="bottom: 90px"
      class="absolute flex justify-between items-center px-8 pin-b pin-x text-sm">
      <p>Built with ♥ by <a
        class="no-underline text-green"
        href="https://twitter.com/jam3sn_">Jam3sn</a></p>

      <div class="flex">
        <a
          class="no-underline text-black hover:text-green"
          href="https://github.com/jam3sn/typematch">Contribute</a>
      </div>
    </div>

    <section class="absolute border-t px-8 py-4 pin-b pin-x">
      <button
        class="bg-grey-light border border-grey-light block text-black font-bold rounded px-4 py-3 w-full focus:outline-none focus:border-green hover:bg-grey hover:border-grey"
        @click="modal = true">Get Code</button>
    </section>

    <modal
      v-if="modal"
      @close="modal = false">
      <h2 slot="title">Get code</h2>

      <get-code slot="body" />

      <div slot="footer">
        <button
          class="bg-grey-light border border-grey-light block text-black font-bold rounded px-4 py-3 w-full focus:outline-none focus:border-green hover:bg-grey hover:border-grey"
          @click="modal = false" >Close</button>

        <div class="flex justify-between items-center mt-6 text-sm">
          <p>Built with ♥ by <a
            class="no-underline text-green"
            href="https://twitter.com/jam3sn_">Jam3sn</a></p>

          <div class="flex">
            <a
              class="no-underline text-black hover:text-green"
              href="https://github.com/jam3sn/typematch">Contribute</a>
          </div>
        </div>
      </div>
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
