import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Layout, Text, Card, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';
import { recipeApi } from '../services/api';
import { Recipe } from '../types';

const RecipeCard = ({ recipe }: { recipe: Recipe }) => (
  <Card style={styles.card}>
    <Text category="h6">{recipe.title}</Text>
    <Text category="s1" style={styles.description}>
      {recipe.description}
    </Text>
    <Text category="c1" style={styles.info}>
      {recipe.cookingTime} mins | {recipe.servings} servings
    </Text>
    <Button size="small" style={styles.button}>
      View Recipe
    </Button>
  </Card>
);

const RecipesScreen = () => {
  const { data: recipes, isLoading, error } = useQuery('recipes', recipeApi.getRecipes);

  if (isLoading) {
    return (
      <Layout style={styles.centered}>
        <Text>Loading recipes...</Text>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout style={styles.centered}>
        <Text>Error loading recipes</Text>
      </Layout>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.layout}>
        <Text category="h1" style={styles.title}>
          Recipes
        </Text>
        <FlatList
          data={recipes?.data}
          renderItem={({ item }) => <RecipeCard recipe={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 16,
  },
  list: {
    padding: 8,
  },
  card: {
    marginBottom: 16,
  },
  description: {
    marginVertical: 8,
  },
  info: {
    marginBottom: 8,
  },
  button: {
    alignSelf: 'flex-start',
  },
});

export default RecipesScreen;