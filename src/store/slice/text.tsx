import { createSlice } from '@reduxjs/toolkit';
import { RootStore, } from '../store';

export type TextSlice = {
  value: string,
}

type TextAction = {
  type: string,
  payload: string,
}

const textSlice = createSlice({
  name: 'text',
  initialState: { value: '' } as TextSlice,
  reducers: {
    putText: (state: TextSlice, action: TextAction ): void => { state.value = action.payload },
  }
});

export const { putText } = textSlice.actions;
export const selectText = (store: RootStore): string => store.text.value;
export default textSlice;
