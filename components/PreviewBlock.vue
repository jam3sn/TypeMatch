<template>
  <div>
    <div
      :style="`color: ${block.color}; font-family: ${font(block.family).family}; font-size: ${block.size}px; font-style: ${font(block.family).variants[block.varient]}; resize: none;`"
      class="cursor-pointer p-4 leading-normal w-full"
      @click="modal = true">
      {{ block.text }}
    </div>

    <div
      v-if="modal"
      class="bg-black-transparent fixed flex justify-center items-center pin z-50">
      <div class="bg-white border border-grey-light relative rounded p-8 max-w-md w-full">
        <svg
          class="absolute cursor-pointer fill-current pin-t pin-r p-2 h-12 w-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          @click="closeModal">
          <path
            d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/>
        </svg>

        <h2 class="mb-8">Edit text</h2>

        <textarea
          v-model="text"
          rows="5"
          autofocus
          class="border border-grey-light block text-black font-bold rounded px-4 py-3 mb-8 w-full focus:bg-grey-light focus:outline-none"/>

        <button
          class="bg-grey-light border border-grey-light block text-black font-bold rounded px-4 py-3 w-full focus:outline-none focus:border-green hover:bg-grey hover:border-grey"
          @click="modal = false" >Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    closeModal() {
      this.modal = false
    },

    font(id) {
      return this.$store.getters.getFont(id)
    }
  }
}
</script>
