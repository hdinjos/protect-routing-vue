const roleBase = {
    state: () => ({
      type: "teacher"
    }),
    mutations: {
      changetype(state) {
        state.type = "headmaster"
      }
    },
    actions: {
  
    }
  }

export default roleBase;