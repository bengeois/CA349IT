import { configureStore } from '@reduxjs/toolkit';

import BasketReducer from './../components/Basket/BasketSlice';

export const store = configureStore({
  reducer: {
    basket: BasketReducer
  }
});
