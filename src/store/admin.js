const admin = {
    namespaced: true,
    state: () => ({
        user: ''
    }),
    mutations: {
        setUser(state, data) {
            state.user = data
        }
    },
    actions: {

    }
}

export default admin;