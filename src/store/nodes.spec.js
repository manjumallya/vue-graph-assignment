import { nodes } from './nodes';
import axios from 'axios';

jest.mock('axios');

describe('nodes Vuex module', () => {
    let state;
    let commit;
    let dispatch;

    beforeEach(() => {
        state = {
            cards: [],
            parentNodes: [],
            childNodes: []
        };
        commit = jest.fn();
        dispatch = jest.fn();
    });

    it('fetches nodes and sets data on success', async () => {
        const responseData = { data: [{ name: 'A', description: 'This is a description of A', parent:'' }, { name: 'B', description: 'This is a description of B', parent:'A' }] };
        axios.get.mockResolvedValue({ data: responseData });

        await nodes.actions.fetchNodes({ state, commit });

        expect(commit).toHaveBeenCalledWith('SET_DATA', responseData.data);
        expect(commit).toHaveBeenCalledWith('SET_PARENT_NODES', []);
        expect(commit).toHaveBeenCalledWith('SET_CHILD_NODES', []);
    });

    it('handles error when fetching nodes', async () => {
        const error = new Error('Failed to fetch data');
        axios.get.mockRejectedValue(error);
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        await expect(nodes.actions.fetchNodes({ state, commit })).rejects.toThrow(error);

        expect(commit).toHaveBeenCalledWith('SET_DATA', []);
        expect(commit).toHaveBeenCalledWith('SET_PARENT_NODES', []);
        expect(commit).toHaveBeenCalledWith('SET_CHILD_NODES', []);
        expect(console.error).toHaveBeenCalled();
        consoleErrorSpy.mockRestore();
    });

    it('fetches parent nodes from cards', () => {
        state.cards = [{ name: 'A', description: 'This is a description of A', parent:'' }, { name: 'B', description: 'This is a description of B', parent:'A' }];

        nodes.actions.fetchParentNodes({ state, commit });

        expect(commit).toHaveBeenCalledWith('SET_PARENT_NODES', [state.cards[0]]);
    });

    it('fetches children nodes for a given parent node', () => {
        state.cards = [{ name: 'A', description: 'This is a description of A', parent:'' }, { name: 'B', description: 'This is a description of B', parent:'A' }];

        nodes.actions.fetchChildren({ state, commit }, { name: 'A' });

        expect(commit).toHaveBeenCalledWith('SET_CHILD_NODES', [state.cards[1]]);
    });

    it('does not set children nodes if there are none for a given parent node', () => {
        state.cards = [{ name: 'A', description: 'This is a description of A', parent:'' }, { name: 'B', description: 'This is a description of B', parent:'A' }];

        nodes.actions.fetchChildren({ state, commit }, { name: 'B' });

        expect(commit).not.toHaveBeenCalledWith('SET_CHILD_NODES', expect.any(Array));
    });
});