import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const eventos = [["10:57", "Presença detectada", "people-outline"], ["10:55", "Ar-condicionado ligado", "snow-outline"], ["10:52", "Iluminação desligada", "bulb-outline"], ["10:48", "Temperatura atingiu 26°C", "thermometer-outline"], ["10:45", "Dispositivo conectado", "hardware-chip-outline"]];

export default function Logs() { return <SafeAreaView style={styles.container}><Text style={styles.eyebrow}>ATIVIDADE</Text><Text style={styles.title}>Logs do sistema</Text>{eventos.map(([hora, texto, icone]) => <View key={hora} style={styles.log}><View style={styles.icon}><Ionicons name={icone} size={19} color="#2F63E9" /></View><View><Text style={styles.logText}>{texto}</Text><Text style={styles.time}>Hoje às {hora}</Text></View></View>)}</SafeAreaView>; }

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#F5F8FD", paddingHorizontal: 20, paddingTop: 40 }, eyebrow: { color: "#2F63E9", fontSize: 11, fontWeight: "700", letterSpacing: 1.2 }, title: { color: "#0A1F44", fontSize: 27, fontWeight: "700", letterSpacing: -0.5, marginBottom: 25, marginTop: 7 }, log: { alignItems: "center", backgroundColor: "#FFFFFF", borderColor: "#E3EAF5", borderRadius: 15, borderWidth: 1, flexDirection: "row", marginBottom: 10, padding: 13 }, icon: { alignItems: "center", backgroundColor: "#EAF1FF", borderRadius: 11, height: 40, justifyContent: "center", marginRight: 12, width: 40 }, logText: { color: "#0A1F44", fontSize: 14, fontWeight: "700" }, time: { color: "#94A1B7", fontSize: 11, marginTop: 4 } });
