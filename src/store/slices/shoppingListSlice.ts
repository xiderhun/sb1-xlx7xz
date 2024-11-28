import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShoppingList, ShoppingListItem } from '../../types';

interface ShoppingListState {
  currentList: ShoppingList | null;
  loading: boolean;
  error: string | null;
}

const initialState: ShoppingListState = {
  currentList: null,
  loading: false,
  error: null,
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    setShoppingList: (state, action: PayloadAction<ShoppingList>) => {
      state.currentList = action.payload;
      state.error = null;
    },
    addItem: (state, action: PayloadAction<ShoppingListItem>) => {
      if (state.currentList) {
        state.currentList.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      if (state.currentList) {
        state.currentList.items = state.currentList.items.filter(
          item => item.ingredientId !== action.payload
        );
      }
    },
    toggleItem: (state, action: PayloadAction<string>) => {
      if (state.currentList) {
        const item = state.currentList.items.find(
          item => item.ingredientId === action.payload
        );
        if (item) {
          item.checked = !item.checked;
        }
      }
    },
  },
});

export const { setShoppingList, addItem, removeItem, toggleItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;