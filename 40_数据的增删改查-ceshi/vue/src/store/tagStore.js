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
    // 列出
    loadTags({commit}) {
      axios.get('/api/tags').then((data) => {
        commit('changeTags', {tagslist: data.data});
      });
    },
    // 上移
    prev({commit, dispatch}, payloads) {
      axios.patch('/api/tags/prev/' + payloads.index).then((data) => {
        dispatch('loadTags');
      });
    },
    // 下移
    next({commit, dispatch}, payloads) {
      axios.patch('/api/tags/next/' + payloads.index).then((data) => {
        dispatch('loadTags');
      });
    },
    // 删除
    del({commit, dispatch}, payloads) {
      axios.delete('/api/tags/' + payloads.index).then((data) => {
        dispatch('loadTags');
      });
    },
    // 批量删除
    delete({commit, dispatch}, payloads) {
      axios.delete('/api/tags/' + payloads.index.join('v')).then((data) => {
        dispatch('loadTags');
      });
    },
    // 
  },
};
