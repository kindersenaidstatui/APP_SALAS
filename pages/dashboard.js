import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const blue = "#2F63E9";

export default function Dashboard({ onGerenciar }) {
  return <SafeAreaView style={styles.container}>
    <View style={styles.header}><View><Text style={styles.eyebrow}>VISÃO GERAL</Text><Text style={styles.titulo}>Olá, Smart Room</Text><Text style={styles.subtitulo}>Sala de Reunião 01</Text></View><TouchableOpacity accessibilityLabel="Notificações" style={styles.notification}><Ionicons name="notifications-outline" size={21} color={blue} /></TouchableOpacity></View>
    <View style={styles.temperatureCard}>
      <View><Text style={styles.cardLabel}>TEMPERATURA ATUAL</Text><View style={styles.tempRow}><Text style={styles.temperature}>25,6</Text><Text style={styles.degree}>°C</Text></View></View>
      <View style={styles.tempIcon}><Ionicons name="thermometer-outline" size={30} color="#FFFFFF" /></View>
      <View style={styles.roomStatus}><View style={styles.statusDot} /><Text style={styles.roomStatusText}>Sala ocupada</Text><View style={styles.humidity}><Ionicons name="water-outline" size={15} color="#DDE9FF" /><Text style={styles.humidityText}>58%</Text></View></View>
    </View>
    <Text style={styles.sectionTitle}>Status do ambiente</Text>
    <View style={styles.grid}>
      <StatusCard icone="bulb-outline" titulo="Iluminação" valor="Desligada" color="#D99000" background="#FFF7E7" />
      <StatusCard icone="snow-outline" titulo="Ar-condicionado" valor="Ligado" color={blue} background="#EAF1FF" />
      <StatusCard icone="people-outline" titulo="Presença" valor="Detectada" color="#16845A" background="#EAF9F3" />
      <StatusCard icone="water-outline" titulo="Umidade" valor="58%" color="#148AB9" background="#E8F8FD" />
    </View>
    <TouchableOpacity accessibilityRole="button" accessibilityLabel="Gerenciar dispositivos" activeOpacity={0.82} style={styles.manage} onPress={onGerenciar}><View style={styles.manageIcon}><Ionicons name="settings-outline" size={18} color="#FFFFFF" /></View><Text style={styles.manageText}>Gerenciar dispositivos</Text><View style={styles.manageArrow}><Ionicons name="arrow-forward" size={18} color="#FFFFFF" /></View></TouchableOpacity>
    <View style={styles.arduinoCard}><View style={styles.arduinoIcon}><Ionicons name="hardware-chip-outline" size={22} color={blue} /></View><View style={styles.arduinoInfo}><Text style={styles.arduinoTitle}>Dispositivo central</Text><Text style={styles.arduinoName}>Arduino · COM3 · 9600 baud</Text><View style={styles.connected}><View style={styles.connectedDot} /><Text style={styles.connectedText}>Conectado</Text></View></View></View>
  </SafeAreaView>;
}

function StatusCard({ icone, titulo, valor, color, background }) {
  return <View style={styles.statusCard}><View style={[styles.statusIcon, { backgroundColor: background }]}><Ionicons name={icone} size={20} color={color} /></View><Text style={styles.statusTitle}>{titulo}</Text><Text style={[styles.statusValue, { color }]}>{valor}</Text></View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F8FD", paddingHorizontal: 20 }, header: { alignItems: "flex-start", flexDirection: "row", justifyContent: "space-between", paddingBottom: 24, paddingTop: 23 }, eyebrow: { color: blue, fontSize: 11, fontWeight: "700", letterSpacing: 1.2, marginBottom: 7 }, titulo: { color: "#0A1F44", fontSize: 27, fontWeight: "700", letterSpacing: -0.5 }, subtitulo: { color: "#71809B", fontSize: 14, marginTop: 5 }, notification: { alignItems: "center", backgroundColor: "#EAF1FF", borderRadius: 14, height: 46, justifyContent: "center", marginTop: 8, width: 46 },
  temperatureCard: { backgroundColor: "#2456C6", borderRadius: 20, minHeight: 163, overflow: "hidden", padding: 20 }, cardLabel: { color: "#DDE9FF", fontSize: 10, fontWeight: "700", letterSpacing: 0.8 }, tempRow: { alignItems: "flex-start", flexDirection: "row", marginTop: 4 }, temperature: { color: "#FFFFFF", fontSize: 56, fontWeight: "700", letterSpacing: -2 }, degree: { color: "#DDE9FF", fontSize: 20, fontWeight: "600", marginTop: 13, marginLeft: 5 }, tempIcon: { alignItems: "center", backgroundColor: "#3D70DC", borderRadius: 16, height: 57, justifyContent: "center", position: "absolute", right: 20, top: 20, width: 57 }, roomStatus: { alignItems: "center", flexDirection: "row", marginTop: 2 }, statusDot: { backgroundColor: "#32E39B", borderRadius: 4, height: 8, marginRight: 7, width: 8 }, roomStatusText: { color: "#FFFFFF", fontSize: 12, fontWeight: "600" }, humidity: { alignItems: "center", flexDirection: "row", marginLeft: "auto" }, humidityText: { color: "#DDE9FF", fontSize: 12, marginLeft: 5 },
  sectionTitle: { color: "#0A1F44", fontSize: 14, fontWeight: "700", marginBottom: 11, marginTop: 24 }, grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }, statusCard: { backgroundColor: "#FFFFFF", borderColor: "#E3EAF5", borderRadius: 17, borderWidth: 1, marginBottom: 12, padding: 14, width: "48.2%" }, statusIcon: { alignItems: "center", borderRadius: 11, height: 37, justifyContent: "center", width: 37 }, statusTitle: { color: "#71809B", fontSize: 12, marginTop: 12 }, statusValue: { fontSize: 14, fontWeight: "700", marginTop: 4 },
  manage: { alignItems: "center", backgroundColor: blue, borderRadius: 13, flexDirection: "row", height: 54, marginTop: 4, paddingHorizontal: 12, shadowColor: "#2F63E9", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.22, shadowRadius: 9 }, manageIcon: { alignItems: "center", backgroundColor: "#4B76E9", borderRadius: 10, height: 32, justifyContent: "center", width: 32 }, manageText: { color: "#FFFFFF", flex: 1, fontSize: 14, fontWeight: "700", marginLeft: 10 }, manageArrow: { alignItems: "center", backgroundColor: "#4B76E9", borderRadius: 10, height: 32, justifyContent: "center", width: 32 }, arduinoCard: { alignItems: "center", backgroundColor: "#FFFFFF", borderColor: "#E3EAF5", borderRadius: 17, borderWidth: 1, flexDirection: "row", marginTop: 13, padding: 14 }, arduinoIcon: { alignItems: "center", backgroundColor: "#EAF1FF", borderRadius: 12, height: 44, justifyContent: "center", width: 44 }, arduinoInfo: { flex: 1, marginLeft: 12 }, arduinoTitle: { color: "#71809B", fontSize: 11 }, arduinoName: { color: "#0A1F44", fontSize: 13, fontWeight: "700", marginTop: 3 }, connected: { alignItems: "center", flexDirection: "row", marginTop: 5 }, connectedDot: { backgroundColor: "#22C78A", borderRadius: 3, height: 6, marginRight: 5, width: 6 }, connectedText: { color: "#16845A", fontSize: 11, fontWeight: "600" },
});
