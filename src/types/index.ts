export interface User {
  id?: string;
  dietaryPreferences: string[];
  allergies: string[];
  favoriteRecipes: string[];
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  cookingTime: number;
  servings: number;
  dietaryTags: string[];
}

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  category: string;
}

export interface ShoppingList {
  id: string;
  userId: string;
  items: ShoppingListItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ShoppingListItem {
  ingredientId: string;
  name: string;
  amount: number;
  unit: string;
  checked: boolean;
}