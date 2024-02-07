<template>
  <header>
    <button @click="fetchNodes" data-cy="fetch-nodes-button">
      Fetch Nodes
    </button>
    <div v-if="isFetchNodesClicked && parentNodes?.length === 0" class="message">
      No nodes to display or error fetching data
    </div>
    <div data-cy="parent-nodes">
      <node-tree :nodes="parentNodes" :selectedId="selectedId" @nodeSelected="fetchChildrens" />
    </div>
    <node-tree :nodes="childrens" :selectedId="selectedId" @nodeSelected="fetchChildrens" />
  </header>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue'
import NodeTree from './components/NodeTree.vue';
import { ref, reactive } from 'vue';

export default {
  components: {
    NodeTree
  },

  setup() {
    const store = useStore();
    let childrens = reactive([]);
    const selectedId = ref('');
    let parentNodes = reactive([]);
    const isFetchNodesClicked = ref(false)

    const fetchNodes = async () => {
      isFetchNodesClicked.value = true;
      await store.dispatch('nodes/fetchData')
      displayParentNode();
    }

    const displayParentNode = () => {
      store.dispatch('nodes/displayParentNode');
    }

    const fetchChildrens = (node) => {
      selectedId.value = node.name;
      store.dispatch('nodes/fetchChildrens', node);
    }

    parentNodes = computed(() => {
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
      selectedId,
      isFetchNodesClicked
    }
  }

}
</script>
<style scoped>
.message{
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
</style>