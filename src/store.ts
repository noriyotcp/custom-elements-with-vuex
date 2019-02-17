import Vue from "vue";
import Vuex, { ActionTree, GetterTree, MutationTree, StoreOptions } from "vuex";

Vue.use(Vuex);

const state: State = {
  total: 0
};

const mutations: MutationTree<State> = {
  increment(): void {
    state.total++;
  },
  decrement(): void {
    state.total--;
  }
};

const actions: ActionTree<State, State> = {
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement")
};

const getters: GetterTree<State, State> = {
  getTotal(): State["total"] {
    return state.total;
  }
};

const store: StoreOptions<State> = {
  actions,
  getters,
  mutations,
  state
};

export default new Vuex.Store<State>(store);
