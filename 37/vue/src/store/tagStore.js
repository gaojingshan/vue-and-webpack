import axios from 'axios';
export default {
  namespaced: true,
  state: {
    taglist: [],
  },
  mutations: {
    loadTags(state, payloads) {
      state.taglist = payloads.taglist;
    },
  },
  actions: {
    loadTags({ commit }, payloads) {
      axios.get('/api/tags').then((data) => {
        console.log(data.data);
        commit('loadTags', {taglist: data.data});
      });
    },
    // 上移
    prev({ commit, dispatch },payloads){
        axios.patch('/api/tags/prev/'+payloads.index).then(data=>{
            // 重拉一次接口，不是真的让taglist中的数据上移
            // 必须写在回调函数中，因为这样就表示当上移Ajax发出之后，拉取数据
            dispatch('loadTags');
        })
    },
    // 删除
    del({commit,dispatch},payloads){
        axios.delete('/api/tags/'+payloads.index.join('v')).then(data=>{
            dispatch('loadTags')
        })
    }
  },
};
