import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.layout}>
        <Text category='h1' style={styles.title}>
          Discover Recipes
        </Text>
        
        <Button style={styles.button}>
          Browse Recipes
        </Button>
        
        <Button style={styles.button}>
          View Shopping List
        </Button>
        
        <Button style={styles.button}>
          My Preferences
        </Button>
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
    textAlign: 'center',
    marginVertical: 24,
  },
  button: {
    marginVertical: 8,
  },
});

export default HomeScreen;