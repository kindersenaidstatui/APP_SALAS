import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Historico() {
  return <SafeAreaView style={styles.container}>
    <Text style={styles.eyebrow}>ACOMPANHAMENTO</Text><Text style={styles.title}>Histórico da sala</Text>
    <Metric icon="thermometer-outline" color="#2F63E9" title="Temperatura" value="25,6 °C" text="Máxima hoje: 28,4 °C · Mínima: 21,8 °C" />
    <Metric icon="people-outline" color="#16845A" title="Presença" value="18 entradas" text="Tempo ocupado: 5h 32min" />
    <Metric icon="bulb-outline" color="#D99000" title="Iluminação" value="4h 18min" text="Tempo total ligada hoje" />
  </SafeAreaView>;
}

function Metric({ icon, color, title, value, text }) { return <View style={styles.card}><View style={[styles.icon, { backgroundColor: `${color}18` }]}><Ionicons name={icon} size={22} color={color} /></View><View style={styles.info}><Text style={styles.cardTitle}>{title}</Text><Text style={[styles.value, { color }]}>{value}</Text><Text style={styles.description}>{text}</Text></View></View>; }
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#F5F8FD", paddingHorizontal: 20, paddingTop: 40 }, eyebrow: { color: "#2F63E9", fontSize: 11, fontWeight: "700", letterSpacing: 1.2 }, title: { color: "#0A1F44", fontSize: 27, fontWeight: "700", letterSpacing: -0.5, marginBottom: 25, marginTop: 7 }, card: { alignItems: "center", backgroundColor: "#FFFFFF", borderColor: "#E3EAF5", borderRadius: 17, borderWidth: 1, flexDirection: "row", marginBottom: 12, padding: 16 }, icon: { alignItems: "center", borderRadius: 13, height: 46, justifyContent: "center", width: 46 }, info: { marginLeft: 13 }, cardTitle: { color: "#71809B", fontSize: 12 }, value: { fontSize: 19, fontWeight: "700", marginTop: 3 }, description: { color: "#94A1B7", fontSize: 11, marginTop: 4 } });
