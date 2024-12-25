import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MovieList from "../Screens/MovieList";
import ShortlistedMovies from "../Screens/ShortlistedMovies";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MovieIcon from "../assets/MovieIcon";
import ShortListIcon from "../assets/ShortListIcon";
import ShortListActiveIcon from "../assets/ShortListActiveIcon";
import MovieActiveIcon from "../assets/MovieActiveIcon";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Movies"
        component={MovieList}
        options={{
          tabBarLabelPosition: "below-icon",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MovieActiveIcon color={color} size={size} />
            ) : (
              <MovieIcon color={color} size={size} />
            ),
        }}
      />

      <Tab.Screen
        name="Shortlist"
        component={ShortlistedMovies}
        options={{
          tabBarLabelPosition: "below-icon",
          tabBarBadge: "1",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <ShortListActiveIcon color={color} size={size} />
            ) : (
              <ShortListIcon color={color} size={size} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
