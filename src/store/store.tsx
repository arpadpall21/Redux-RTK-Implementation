import { configureStore } from '@reduxjs/toolkit';
import colorSlice, { ColorSlice } from './slice/color';
import textSlice, { TextSlice } from './slice/text';
import requestApiSlice, { RequestApiSlice } from './slice/request-api';

export type RootStore = {
  color: ColorSlice,
  text: TextSlice,
  requestApi: RequestApiSlice,
}

export default configureStore({
  reducer: {
    color: colorSlice.reducer,
    text: textSlice.reducer,
    requestApi: requestApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(requestApiSlice.middleware),
});
