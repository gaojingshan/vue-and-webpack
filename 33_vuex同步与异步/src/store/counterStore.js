export default {
    // 添加一个命名空间.true就表示添加
    // Vuex 允许我们将 store 分割成模块。命名空间就是将全局的进行区分。
    namespaced: true,
    // 全局数据不是data，而是state
    state: {
        a: 10
    },
    // 可预测状态容器，因为这里能够预测出来a会发生何种变化，所有在这里书写的函数就是a能够发生改变的函数
    // mutations是英语“突变”的意思，这里是唯一能够改变state的地方 。
    // 如何触发这些函数呢？？在组件中使用$store.commit()
    // 载荷就可以在mutations中被接收了
    mutations: {
        add(state, payloads) {
            // payloads表示载荷
            state.a += payloads.n;
        },
        minus(state) {
            state.a--;
        }
    },
    // 异步需要定义在actions中
    // 如何触发这些函数呢？？在组件中使用$store.dispatch()
    actions: {
        add({ commit }, payloads) {
            // actions是没有资格更改state, 必须通过commit来改变, 必须通过一次上跳进行更改，刺激mutations
            setTimeout(function () {
                commit('add', payloads)
            }, 2000)
        }
    }
}