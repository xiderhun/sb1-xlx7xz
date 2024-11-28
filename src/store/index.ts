import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import recipeReducer from './slices/recipeSlice';
import shoppingListReducer from './slices/shoppingListSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    recipes: recipeReducer,
    shoppingList: shoppingListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;