import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Input, Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingScreen = ({ navigation }: any) => {
  const [dietaryPreferences, setDietaryPreferences] = useState('');

  const handleContinue = () => {
    // TODO: Save preferences to backend
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.layout}>
        <Card style={styles.card}>
          <Text category='h1' style={styles.title}>Welcome to Grocr</Text>
          <Text category='s1' style={styles.subtitle}>
            Let's personalize your experience
          </Text>

          <Input
            style={styles.input}
            placeholder='Enter your dietary preferences'
            value={dietaryPreferences}
            onChangeText={setDietaryPreferences}
          />

          <Button onPress={handleContinue}>
            Continue
          </Button>
        </Card>
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
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
});

export default OnboardingScreen;