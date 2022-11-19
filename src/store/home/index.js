import {getGushi} from '@/api'

const state ={
   getGushi:{},
};
const mutations={
    CATEGUSHI(state, getGushi){
        state.getGushi=getGushi;
    }
};
const actions={
   async cateGushi({commit}){
      let result = await getGushi();
        commit("CATEGUSHI",result.content)
     
    }
};
const getters={};

export default{
    state,
    mutations,
    actions,
    getters
}