import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import CalendarButton from "../components/buttons/CalendarButton";
import { Flexoki } from "../theme/colors";

const today = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const [calendarView, setCalendarView] = React.useState<
  "day" | "week" | "month"
>("day");

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Flexoki.bg2, // or any Flexoki color
        },
        headerTintColor: Flexoki.tx, // text/icon color in the header
        headerTitleStyle: {
          fontFamily: "TimesNewRoman", // if you want to set the font
        },
        tabBarStyle: {
          backgroundColor: Flexoki.bg2, //bottom tab bar color
        },
        tabBarActiveTintColor: Flexoki.bl[0], // active tab icon/text color
        tabBarInactiveTintColor: Flexoki.tx2, // inactive tab icon/text color
      }}
    >
      <Tabs.Screen
        name="journal"
        options={{
          title: "Journal",
          headerTitle: today,
          headerRight: () => (
            <CalendarButton
              view={calendarView}
              onViewChange={setCalendarView}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Home",
          headerTitle: "Welcome, Rachel!",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Ask Ki",
          headerTitle: today,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
