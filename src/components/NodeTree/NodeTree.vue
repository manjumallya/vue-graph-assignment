<template>
  <div data-cy="nodes-data" class="cards">
    <card v-for="node in nodes" :key="node.name" @click="handleNodeSelected(node)"
      :class="{ opace: node.name !== selectedNode.name, selected: node.name === selectedNode.name }" class="card">
      <template v-slot:title>
        {{ node.name }}
      </template>

      <template v-slot:parent v-if="node.parent">
        Child of {{ node.parent }}
      </template>

      <template v-slot:description>
        {{ node.description }}
      </template>
    </card>
  </div>
  <Portal to="body">
    <template v-if="showPopup">
      <div data-cy="sidebar-popup" class="popup">
        <div>{{ selectedNode.description }}</div>
        <button data-cy="close-button" class="button" @click="closePopup">Close</button>
      </div>
    </template>
  </Portal>
</template>

<script>
import Card from '../Card/Card.vue'
import { ref, toRefs } from 'vue'

export default {
  components: {
    Card
  },
  props: {
    selectedNode: {
      type: Object
    },
    nodes: {
      type: Array
    }
  },
  setup(props, { emit }) {
    const showPopup = ref(false);
    const { selectedNode } = toRefs(props);

    const handleNodeSelected = (node) => {
      showPopup.value = true;
      selectedNode = node
      emit('nodeSelected', node)
    }

    const closePopup = () => {
      showPopup.value = false;
    }

    return {
      showPopup,
      handleNodeSelected,
      closePopup
    }
  }
}
</script>

<style scoped>
@import url('./styles.css');
</style>
