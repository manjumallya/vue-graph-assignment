import { useStore } from 'vuex';
import { ref, computed } from 'vue'

export const appComponentSetup = () =>{
    const store = useStore();
    const selectedNode = ref({});
    const isFetchNodesClicked = ref(false);

    const parentNodes = computed(() =>
      store.state.nodes.parentNodes
    );

    const childrens = computed(() =>
      store.state.nodes.childNodes
    )

    const showNoNodesMessage = computed(() =>
      !isFetchNodesClicked.value && parentNodes.value.length === 0
    )

    const showParentNodes = computed(() =>
      !isFetchNodesClicked.value && parentNodes.value.length > 0
    )

    const showChildNodes = computed(() =>
      !isFetchNodesClicked.value && childrens.value.length > 0
    );

    const errorMessage = computed(() =>
      parentNodes.value.length === 0 ? 'No nodes to display. Click on Fetch Nodes button..' : ''
    )

    const fetchNodes = async () => {
      isFetchNodesClicked.value = true;
      try {
        await store.dispatch('nodes/fetchNodes')
        fetchParentNodes();
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        isFetchNodesClicked.value = false;
      }
    }

    const fetchParentNodes = () => {
      store.dispatch('nodes/fetchParentNodes');
    }

    const fetchChildren = (node) => {
      selectedNode.value = node;
      store.dispatch('nodes/fetchChildren', node);
    }

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