import axios from 'axios';
export default {
  namespaced: true,
  state: {
    tagslist: [],
  },
  mutations: {
    changeTags(state, payloads) {
      state.tagslist = payloads.tagslist;
    },
  },
  actions: {
    loadTags({commit}) {
      axios.get('/api/tags').then((data) => {
        commit('changeTags', {tagslist: data.data});
      });
    },
  },
};
