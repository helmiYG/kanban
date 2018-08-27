import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AllTasks: ''
  },
  mutations: {
    GET_ALL(state, payload){
      state.AllTasks = payload
    },
   
  },
  actions: {
    
    addNewTask(context, data){
      db.ref(`tasks/${data.position}`).push(data)
    },

    getAllTasks(context, data){
      db.ref('tasks/').on('value', function(snapshot){
        let allTasks = snapshot.val()
        context.commit('GET_ALL', allTasks)
      })
    }, 
  }
})
