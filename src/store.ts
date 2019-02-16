import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { total: 0 },
  mutations: {
    increment(state) {
      state.total++;
    },
    decrement(state) {
      state.total--;
    }
  },
  actions: {
    increment: ({ commit }) => commit("increment"),
    decrement: ({ commit }) => commit("decrement")
  }
});
