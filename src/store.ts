import Vue from "vue";
import Vuex, { ActionTree, GetterTree, MutationTree, StoreOptions } from "vuex";

Vue.use(Vuex);

const state: State = {
  total: 0
};

const mutations: MutationTree<State> = {
  increment(state: State): void {
    state.total++;
  },
  decrement(state: State): void {
    state.total--;
  }
};

const actions: ActionTree<State, State> = {
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement")
};

const getters: GetterTree<State, State> = {
  getTotal(state: State) {
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
