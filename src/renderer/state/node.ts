import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { NODE_STATUS } from '../messages';

// Define a type for the slice state
export interface NodeState {
  numGethDiskUsedGB: number | undefined;
  numFreeDiskGB: number | undefined;
  status: string | undefined;
  // True, if the node is running and has HTTP RPC enabled (TODO HTTP)
  isAvailableForPolling: boolean | undefined;
}

// Define the initial state using that type
export const initialState: NodeState = {
  numGethDiskUsedGB: undefined,
  numFreeDiskGB: undefined,
  status: 'loading',
  isAvailableForPolling: undefined,
};

console.log('Intial node state: ', initialState);

export const nodeSlice = createSlice({
  name: 'node',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateNodeNumGethDiskUsedGB: (
      state,
      action: PayloadAction<number | undefined>
    ) => {
      state.numGethDiskUsedGB = action.payload;
    },
    updateSystemNumFreeDiskGB: (
      state,
      action: PayloadAction<number | undefined>
    ) => {
      state.numFreeDiskGB = action.payload;
    },
    updateNodeStatus: (state, action: PayloadAction<string | undefined>) => {
      state.status = action.payload;
      if (state.status === NODE_STATUS.running) {
        state.isAvailableForPolling = true;
        console.log('Starting polling node for data');
      } else {
        state.isAvailableForPolling = false;
        console.log('Stop polling node for data');
      }
    },
  },
});

export const {
  updateNodeNumGethDiskUsedGB,
  updateSystemNumFreeDiskGB,
  updateNodeStatus,
} = nodeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectNumGethDiskUsedGB = (state: RootState): number | undefined =>
  state.node.numGethDiskUsedGB;
export const selectNumFreeDiskGB = (state: RootState): number | undefined =>
  state.node.numFreeDiskGB;
export const selectNodeStatus = (state: RootState): string | undefined =>
  state.node.status;
export const selectIsAvailableForPolling = (
  state: RootState
): boolean | undefined => state.node.isAvailableForPolling;

export default nodeSlice.reducer;