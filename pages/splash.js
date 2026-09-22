import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Splash({ onFinish }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.88)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 380, useNativeDriver: true }),
      Animated.spring(scale, { toValue: 1, speed: 12, bounciness: 8, useNativeDriver: true }),
    ]).start();
    const timer = setTimeout(onFinish, 1400);
    return () => clearTimeout(timer);
  }, [onFinish, opacity, scale]);

  return <View style={styles.container}>
    <Animated.View style={[styles.content, { opacity, transform: [{ scale }] }]}>
      <View style={styles.logo}><Ionicons name="grid" size={36} color="#2456C6" /></View>
      <Text style={styles.name}>Smart Room</Text>
      <Text style={styles.tagline}>Seu espaço, mais inteligente.</Text>
    </Animated.View>
    <View style={styles.loading}><View style={styles.loadingActive} /></View>
  </View>;
}

const styles = StyleSheet.create({
  container: { alignItems: "center", backgroundColor: "#2456C6", flex: 1, justifyContent: "center" }, content: { alignItems: "center" }, logo: { alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 24, height: 88, justifyContent: "center", width: 88 }, name: { color: "#FFFFFF", fontSize: 28, fontWeight: "700", letterSpacing: -0.5, marginTop: 18 }, tagline: { color: "#DDE9FF", fontSize: 14, marginTop: 6 }, loading: { backgroundColor: "#4B76D5", borderRadius: 3, bottom: 72, height: 5, overflow: "hidden", position: "absolute", width: 72 }, loadingActive: { backgroundColor: "#FFFFFF", borderRadius: 3, height: "100%", width: "65%" },
});
