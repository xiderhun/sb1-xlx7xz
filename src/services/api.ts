import axios from 'axios';
import { Recipe, User, ShoppingList } from '../types';

const API_URL = 'https://api.grocr.dev'; // Replace with actual API URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const recipeApi = {
  getRecipes: () => api.get<Recipe[]>('/recipes'),
  getRecipeById: (id: string) => api.get<Recipe>(`/recipes/${id}`),
  searchRecipes: (query: string) => api.get<Recipe[]>(`/recipes/search?q=${query}`),
};

export const userApi = {
  updatePreferences: (userId: string, preferences: string[]) =>
    api.put<User>(`/users/${userId}/preferences`, { preferences }),
  getUser: (userId: string) => api.get<User>(`/users/${userId}`),
};

export const shoppingListApi = {
  getCurrentList: (userId: string) =>
    api.get<ShoppingList>(`/users/${userId}/shopping-list`),
  updateList: (userId: string, list: ShoppingList) =>
    api.put<ShoppingList>(`/users/${userId}/shopping-list`, list),
};