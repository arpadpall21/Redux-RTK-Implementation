import { createSlice } from '@reduxjs/toolkit';
import { RootStore } from '../store';

type HexColor = `#${string}`;
export type ColorSlice = {
  colors: HexColor[],
  index: number,
  selectedColor: HexColor,
}

function getRandomHexColor(): HexColor {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');

  return `#${hexR}${hexG}${hexB}`;
}

const colorSlice = createSlice({
  name: 'color',
  initialState: { colors: ['#ffffff'], index: 0, selectedColor: '#ffffff' } as ColorSlice,
  reducers: {
    nextColor: (state: ColorSlice): void => {
      if (state.index === state.colors.length - 1) {
        state.colors.push(getRandomHexColor());
      }
      state.index += 1;
      state.selectedColor = state.colors[state.index];
    },
    prevColor: (state: ColorSlice): void => {
      if (state.index > 0) {
        state.index -= 1;
        state.selectedColor = state.colors[state.index];
      }
    }
  }
});

export const { nextColor, prevColor } = colorSlice.actions;
export const selectCurrentColor = (store: RootStore): HexColor => store.color.selectedColor;
export default colorSlice;
