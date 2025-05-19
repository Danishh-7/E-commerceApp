import { StyleSheet, TextInput, SafeAreaView, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
import Header from "./Header";
import Category from "./Category";

const Homescreen = () => {
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* Header */}
          <Header />

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Icon name="search1" size={20} color="#888" style={styles.searchIcon} />
            <TextInput
              placeholder="Search products..."
              placeholderTextColor="#888"
              style={styles.searchInput}
            />
          </View>

          {/* Categories Section */}
          <Category />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 12,
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: "#333",
  },
});
