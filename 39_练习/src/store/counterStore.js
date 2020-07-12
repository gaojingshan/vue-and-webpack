export default {
  namespaced: true,
  state: {
    a: 10,
  },
  mutations:{
      add(state,pageloads){
          state.a+=pageloads.n
      },
      minus(state){
        state.a--
      }
  },
  actions:{
      add({commit},pageloads){
          setTimeout(function(){
            commit('add',pageloads);
          },2000)
      }
  }
};
