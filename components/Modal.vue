<template>
  <div class="bg-black-transparent fixed flex justify-center items-center pin z-50">
    <div
      class="bg-white border border-grey-light relative rounded p-8 max-w-md w-full"
      role="dialog">
      <svg
        class="absolute cursor-pointer fill-current pin-t pin-r p-2 h-12 w-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        @click="close()">
        <path
          d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/>
      </svg>

      <div class="border-b border-grey-light mb-8 pb-6">
        <slot name="title" />
      </div>

      <slot name="body" />

      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
