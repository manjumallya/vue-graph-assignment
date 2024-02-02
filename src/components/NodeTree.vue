<template>
  <div data-cy="nodes-data" class="cards">
    <card v-for="p in nodes" :key="p.name" @click="click(p)"
      :class="{ opace: p.name !== selectedId, selected: p.name === selectedId }" class="card">
      <template v-slot:title>
        {{ p.name }}
      </template>

      <template v-slot:parent v-if="p.parent">
        Child of {{ p.parent }}
      </template>

      <template v-slot:description>
        {{ p.description }}
      </template>
    </card>
  </div>
  <teleport to="body">
    <div data-cy="sidebar-popup" v-if="showPopup"  class="popup">
      <div>{{ description }}</div>
      <button data-cy="close-button" class="button" @click="closePopup">Close</button>
    </div>
  </teleport>
</template>

<script>
import Card from './Card.vue'

export default {
  emits: ['nodeSelected'],
  components: {
    Card
  },
  data() {
    return {
      showPopup: false,
      description: ''
    }
  },
  props: {
    selectedId: {
      type: String
    },
    nodes: {
      type: Array
    }
  },

  methods: {
    click(node) {
      this.showPopup = true;
      this.description = node.description
      this.$emit('nodeSelected', node)
    },
    closePopup() {
      this.showPopup = false;
    }
  }
}
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.opace {
  opacity: 0.4;
}

.selected {
  opacity: 5;
}

.card:hover {
  opacity: 1;
}

.popup {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button{
  margin-top: 10px;
}
</style>
