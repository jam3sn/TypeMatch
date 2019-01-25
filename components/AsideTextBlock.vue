<template>
  <div class="border-t flex flex-wrap p-8">
    <div class="mb-4 pr-3 w-1/2">
      <label
        for="font-category"
        class="block mb-2">Font Category</label>

      <select
        id="font-category"
        v-model="category"
        class="bg-grey-light border border-grey-light rounded text-black p-3 w-full focus:border-green focus:outline-none">
        <option value="serif">Serif</option>
        <option value="sans-serif">Sans Serif</option>
        <option value="display">Display</option>
        <option value="handwriting">Handwriting</option>
        <option value="monospace">Monospace</option>
      </select>
    </div>

    <div class="mb-4 pl-3 w-1/2">
      <label
        for="font-family"
        class="block mb-2">Font Family</label>

      <select
        id="font-family"
        v-model="family"
        class="bg-grey-light border border-grey-light rounded text-black p-3 w-full focus:border-green focus:outline-none">
        <option
          v-for="(font, key) in fonts"
          :key="key"
          :value="key">{{ font.family }}</option>
      </select>
    </div>

    <div
      v-if="fonts[family] && fonts[family].variants.length > 0"
      class="mb-4 pr-3 w-1/2">
      <label
        for="font-variant"
        class="block mb-2">Font Variant</label>

      <select
        id="font-variant"
        v-model="variant"
        class="bg-grey-light border border-grey-light rounded text-black p-3 w-full focus:border-green focus:outline-none">
        <option
          v-for="(variant, key) in fonts[family].variants"
          :key="key"
          :value="key">{{ variant }}</option>
      </select>
    </div>

    <div class="mb-4 pl-3 w-1/2">
      <label
        for="font-size"
        class="block mb-2">Font Size</label>

      <input
        id="font-size"
        v-model="size"
        type="number"
        class="bg-grey-light border border-grey-light rounded text-black p-1 w-full focus:border-green focus:outline-none">
    </div>

    <div class="pr-3 w-1/2">
      <label
        for="color"
        class="block mb-2">Text Color</label>

      <input
        id="color"
        v-model="color"
        type="text"
        class="bg-grey-light border border-grey-light rounded text-black p-1 w-full focus:border-green focus:outline-none">
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

  computed: {
    category: {
      get: function() {
        return this.$store.getters.getBlockAttr(this.id, 'category')
      },
      set: function(value) {
        this.$store.commit('updateBlockAttr', {
          id: this.id,
          key: 'category',
          value: value
        })
      }
    },

    color: {
      get: function() {
        return this.$store.getters.getBlockAttr(this.id, 'color')
      },
      set: function(value) {
        this.$store.commit('updateBlockAttr', {
          id: this.id,
          key: 'color',
          value: value
        })
      }
    },

    family: {
      get: function() {
        return this.$store.getters.getBlockAttr(this.id, 'family')
      },
      set: function(value) {
        this.$store.commit('updateBlockAttr', {
          id: this.id,
          key: 'family',
          value: value
        })
      }
    },

    size: {
      get: function() {
        return this.$store.getters.getBlockAttr(this.id, 'size')
      },
      set: function(value) {
        this.$store.commit('updateBlockAttr', {
          id: this.id,
          key: 'size',
          value: value
        })
      }
    },

    variant: {
      get: function() {
        return this.$store.getters.getBlockAttr(this.id, 'variant')
      },
      set: function(value) {
        this.$store.commit('updateBlockAttr', {
          id: this.id,
          key: 'variant',
          value: value
        })
      }
    },

    fonts: {
      get: function() {
        return this.$store.getters.getAllFonts
      }
    }
  }
}
</script>
