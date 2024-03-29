import axios from 'axios'

export const nodes = {
    namespaced: true,

    state() {
        return {
            cards: [],
            parentNodes: [],
            childNodes: []
        }
    },
    mutations: {
        SET_DATA(state, cards) {
            state.cards = cards;
        },
        SET_PARENT_NODES(state, nodes) {
            state.parentNodes = nodes;
        },
        SET_CHILD_NODES(state, nodes) {
            state.childNodes = nodes;
        }
    },
    actions: {
        async fetchNodes(ctx) {
            try {
                const response = await axios.get('http://localhost:8080/api/data')
                ctx.commit('SET_DATA', response.data.data);
                ctx.commit('SET_PARENT_NODES', []);
                ctx.commit('SET_CHILD_NODES', []);
            } catch (error) {
                ctx.commit('SET_DATA', []);
                ctx.commit('SET_PARENT_NODES', []);
                ctx.commit('SET_CHILD_NODES', []);
                console.error('Error fetching data', error)
                throw error;
            }
        },
        fetchParentNodes(ctx) {
           const filteredData = ctx.state.cards.filter(card => 
             card.parent === ""
           )
            ctx.commit('SET_PARENT_NODES', filteredData);
        },
        fetchChildren(ctx, node) {
            const filteredData = ctx.state.cards.filter(card => 
                card.parent === node.name
            )
            if(filteredData.length > 0)
                ctx.commit('SET_CHILD_NODES', filteredData);
        }
    }
}