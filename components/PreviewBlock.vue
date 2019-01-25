<template>
  <div>
    <div
      :style="`color: ${block.color}; font-family: ${font(block.family).family}; font-size: ${block.size}px; font-style: ${font(block.family).variants[block.varient]}; resize: none;`"
      class="cursor-pointer p-4 leading-normal w-full"
      @click="modal = true">
      {{ block.text }}
    </div>

    <modal
      v-if="modal"
      @close="modal = false">
      <h2 slot="title">Edit text</h2>

      <textarea
        slot="body"
        v-model="text"
        rows="5"
        autofocus
        class="border border-grey-light block text-black font-bold rounded px-4 py-3 mb-8 w-full focus:bg-grey-light focus:outline-none"/>

      <button
        slot="footer"
        class="bg-grey-light border border-grey-light block text-black font-bold rounded px-4 py-3 w-full focus:outline-none focus:border-green hover:bg-grey hover:border-grey"
        @click="modal = false" >Close</button>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal'

export default {
  components: { Modal },

  props: {
    id: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      modal: false
    }
  },

  computed: {
    block() {
      return this.$store.getters.getBlock(this.id)
    },

    text: {
      get: function() {
        return this.$store.getters.getBlockAttr(this.id, 'text')
      },
      set: function(value) {
        this.$store.commit('updateBlockAttr', {
          id: this.id,
          key: 'text',
          value: value
        })
      }
    }
  },

  methods: {
    font(id) {
      return this.$store.getters.getFont(id)
    }
  }
}
</script>
