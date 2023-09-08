import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

import CustomButton from './components/CustomButton/CustomButton';

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
          <CustomButton title={"Press"} onPress={() => alert("Pressed")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {flex:1, backgroundColor:"plum"},
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'ios' ? 35 : 45
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 25,
        fontStyle: "italic"
      },
      android: {
        color: "red",
        fontSize: 20,
        fontStyle: "Bold"
      }
    }),
    // fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  }
});
