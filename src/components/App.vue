<template>
  <header>
    <button @click="fetchNodes" data-cy="fetch-nodes-button" :disabled="isFetchNodesClicked">
      {{ isFetchNodesClicked ? 'Fetching...' : 'FetchNodes' }}
    </button>
    <div v-if="showNoNodesMessage" class="message">
      {{ errorMessage }}
    </div>
    <div data-cy="parent-nodes">
      <node-tree v-if="showParentNodes" :nodes="parentNodes" :selectedNode="selectedNode" @nodeSelected="fetchChildren" />
    </div>
    <node-tree v-if="showChildNodes" :nodes="childrens" :selectedNode="selectedNode" @nodeSelected="fetchChildren" />
  </header>
</template>

<script>
import { appComponentSetup } from './utils/appComponentSetup'
import NodeTree from './NodeTree/NodeTree.vue';

export default {
  components: {
    NodeTree
  },

  setup() {
    const {
      selectedNode,
      isFetchNodesClicked,
      parentNodes,
      childrens,
      showNoNodesMessage,
      showParentNodes,
      showChildNodes,
      errorMessage,
      fetchNodes,
      fetchParentNodes,
      fetchChildren
    } = appComponentSetup();

    return {
      selectedNode,
      isFetchNodesClicked,
      parentNodes,
      childrens,
      showNoNodesMessage,
      showParentNodes,
      showChildNodes,
      errorMessage,
      fetchNodes,
      fetchParentNodes,
      fetchChildren
    }
  }

}
</script>
<style>
@import url('./styles.css');
</style>