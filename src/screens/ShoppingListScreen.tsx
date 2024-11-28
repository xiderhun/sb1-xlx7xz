import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Layout, Text, CheckBox, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { toggleItem } from '../store/slices/shoppingListSlice';
import { ShoppingListItem } from '../types';

const ListItem = ({ item }: { item: ShoppingListItem }) => {
  const dispatch = useDispatch();

  return (
    <Layout style={styles.listItem}>
      <CheckBox
        checked={item.checked}
        onChange={() => dispatch(toggleItem(item.ingredientId))}
      >
        {`${item.amount} ${item.unit} ${item.name}`}
      </CheckBox>
    </Layout>
  );
};

const ShoppingListScreen = () => {
  const shoppingList = useSelector((state: RootState) => state.shoppingList.currentList);

  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.layout}>
        <Text category="h1" style={styles.title}>
          Shopping List
        </Text>
        {shoppingList?.items.length ? (
          <FlatList
            data={shoppingList.items}
            renderItem={({ item }) => <ListItem item={item} />}
            keyExtractor={(item) => item.ingredientId}
            contentContainerStyle={styles.list}
          />
        ) : (
          <Layout style={styles.empty}>
            <Text category="s1">Your shopping list is empty</Text>
            <Button style={styles.button}>Browse Recipes</Button>
          </Layout>
        )}
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
  title: {
    marginBottom: 16,
  },
  list: {
    padding: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 16,
  },
});

export default ShoppingListScreen;