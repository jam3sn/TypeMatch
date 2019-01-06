import Vuex from 'vuex'
import Block from './block'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    /**
     * State
     */
    state: () => ({
      fonts: [],
      bgColor: '#ffffff'
    }),

    /**
     * Getters
     */
    getters: {
      getBgColor(state) {
        return state.bgColor
      },

      getFont: state => id => {
        return state.fonts[id]
      },

      // Get all fonts
      getAllFonts(state) {
        return state.fonts
      }
    },

    /**
     * Mutations
     */
    mutations: {
      // Add new fonts
      addFonts(state, newFonts) {
        state.fonts = newFonts
      },

      // Updates the bg color
      updateBgColor(state, color) {
        state.bgColor = color
      }
    },

    /**
     * Actions
     */
    actions: {
      // Get fonts from Google Fonts
      getFonts(context) {
        axios
          .get(
            `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBsAFnh4V77XPzo9e4j_EuQRqVGrxQaX4w`
          )
          .then(({ data }) => {
            if (data.items.length > 0) context.commit('addFonts', data.items)
          })
          .catch(error => console.error(error))
      }
    },

    modules: {
      block: Block
    }
  })
}

export default createStore
