<template>
  <header>
    <button @click="fetchNodes">
      Fetch Nodes
    </button>
    <node-tree :nodes="parentNodes" :selectedId="selectedId" @nodeSelected="fetchChildrens" />
    <node-tree :nodes="childrens" :selectedId="selectedId" @nodeSelected="fetchChildrens"/>
  </header>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue'
import NodeTree from './components/NodeTree.vue';
import {ref, reactive} from 'vue';

export default {
  components: {
    NodeTree
  },

  setup() {
    const store = useStore();
    let childrens = reactive([]);
    const selectedId = ref('');

    const fetchNodes = async () => {
      await store.dispatch('nodes/fetchData')
      displayParentNode();
    }

    const displayParentNode = () => {
      store.dispatch('nodes/displayParentNode');
    }

    const  fetchChildrens = (node) => {
      selectedId.value = node.name;
      store.dispatch('nodes/fetchChildrens', node);
    }
    
    const parentNodes = computed(() => {
      return store.state.nodes.parentNodes
    })
    
    childrens = computed(() => {
      return store.state.nodes.childNodes
    })

    return {
      parentNodes,
      fetchNodes,
      childrens,
      fetchChildrens,
      displayParentNode,
      selectedId
    }
  }

}
</script>
