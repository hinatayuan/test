/*
* @Author: hinata
* @Date:   2018-04-19 15:41:23
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-20 14:19:10
*/
//初始化数据
const state = {
    test:'',
    wish:'bless u',
    keep:''
}
//抛出去的数据
const getters = {
    message:state=>state.test,
    home:state=>state.wish,
    keep(state,getters){

    }
}
const actions = {
    action({commit}){
        commit('update')
    }
}

const mutations = {
    update(state){
        state.test='数据已经被更新'
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}