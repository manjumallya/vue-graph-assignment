import { createStore } from 'vuex';
import { nodes } from './nodes'

export const store = createStore({
    modules: {
        nodes
    }
})