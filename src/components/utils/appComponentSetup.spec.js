import { useStore } from 'vuex';
import { ref } from 'vue';
import { appComponentSetup } from './appComponentSetup'; 

jest.mock('vuex', () => ({
  useStore: jest.fn()
}));

describe('appComponentSetup', () => {
  let store;
  let state;
  let dispatch;

  beforeEach(() => {
    state = {
      nodes: {
        parentNodes: [],
        childNodes: []
      }
    };

    dispatch = jest.fn();

    store = {
      state,
      dispatch
    };

    useStore.mockReturnValue(store);
  });

  it('fetchNodes sets isFetchNodesClicked to true and calls fetchParentNodes', async () => {
    const {
      isFetchNodesClicked,
      fetchNodes,
      fetchParentNodes
    } = appComponentSetup();

    await fetchNodes();

    expect(isFetchNodesClicked.value).toBe(true);
    expect(dispatch).toHaveBeenCalledWith('nodes/fetchNodes');
    expect(fetchParentNodes).toHaveBeenCalled();
  });

  it('fetchParentNodes calls the correct action', () => {
    const { fetchParentNodes } = appComponentSetup();
    fetchParentNodes();
    expect(dispatch).toHaveBeenCalledWith('nodes/fetchParentNodes');
  });

  it('fetchChildren updates selectedNode and calls the correct action', () => {
    const { fetchChildren, selectedNode } = appComponentSetup();
    const node = { id: 1, name: 'Node 1' };
    fetchChildren(node);
    expect(selectedNode.value).toEqual(node);
    expect(dispatch).toHaveBeenCalledWith('nodes/fetchChildren', node);
  });
});