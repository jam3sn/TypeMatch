export default {
  state: {
    blocks: [
      {
        category: 'sans-serif',
        color: '#22292f',
        family: 0,
        text: 'Click me to edit',
        size: 32,
        variant: 0
      }
    ]
  },

  /**
   * Getters
   */
  getters: {
    // Get single block
    getBlock: state => id => {
      return state.blocks[id]
    },

    // Get all blocks
    getBlocks(state) {
      return state.blocks
    },

    // Get block attribute
    getBlockAttr: state => (id, key) => {
      return state.blocks[id][key]
    }
  },

  /**
   * Mutations
   */
  mutations: {
    // Add new text block
    addNewBlock(state) {
      state.blocks.push({
        category: 'sans-serif',
        color: '22292f',
        family: 0,
        text: 'Click me to edit',
        size: 16,
        variant: 0
      })
    },

    // Update block attribute
    updateBlockAttr(state, valueObj) {
      state.blocks[valueObj.id][valueObj.key] = valueObj.value
    }
  }
}
