import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button, Input } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updatePreferences } from '../store/slices/userSlice';

const ProfileScreen = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleUpdatePreferences = (preferences: string[]) => {
    dispatch(updatePreferences(preferences));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.layout}>
        <Text category="h1" style={styles.title}>
          Profile
        </Text>
        <Layout style={styles.section}>
          <Text category="h6" style={styles.sectionTitle}>
            Dietary Preferences
          </Text>
          {user?.dietaryPreferences.map((pref, index) => (
            <Text key={index} style={styles.preference}>
              {pref}
            </Text>
          ))}
          <Button size="small" style={styles.button}>
            Edit Preferences
          </Button>
        </Layout>
        <Layout style={styles.section}>
          <Text category="h6" style={styles.sectionTitle}>
            Allergies
          </Text>
          {user?.allergies.map((allergy, index) => (
            <Text key={index} style={styles.preference}>
              {allergy}
            </Text>
          ))}
          <Button size="small" style={styles.button}>
            Edit Allergies
          </Button>
        </Layout>
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
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  preference: {
    marginBottom: 8,
  },
  button: {
    marginTop: 8,
  },
});

export default ProfileScreen;